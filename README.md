# SimpleFormAttachments

[![Build Status](https://travis-ci.org/tomasc/simple_form_attachments.svg)](https://travis-ci.org/tomasc/simple_form_attachments) [![Gem Version](https://badge.fury.io/rb/simple_form_attachments.svg)](http://badge.fury.io/rb/simple_form_attachments) [![Coverage Status](https://img.shields.io/coveralls/tomasc/simple_form_attachments.svg)](https://coveralls.io/r/tomasc/simple_form_attachments)

A Rails engine for creating Attachments using the [jQuery File Upload](https://github.com/blueimp/jQuery-File-Upload) plugin.

Dependencies:
* [Mongoid](http://mongoid.org)
* [Simple Form](https://github.com/plataformatec/simple_form)

## Installation

Add this line to your application's Gemfile:

    gem 'simple_form_attachments'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install simple_form_attachments

Add `simple_form_attachments` following to `application.js`:

    //= require simple_form_attachments

## Usage

### Attachment model

Create a model for your attachments that includes the `SimpleFormAttachments::Attachment` concern:

```ruby
class Attachment
  include SimpleFormAttachments::Attachment
end
```

Note that the model does not include specific accessors (ie Dragonfly). You need to define those yourself in your model.

#### Validations

Standard Rails validation errors are displayed in the uploader, should the uploaded file not pass the validations defined on the attachment model.

### Parent model

#### Relations

The attachment owner needs to include the `SimpleFormAttachments::HasAttachments` mixin, which includes the relation macros `has_one_attachment` and `has_many_attachments`:

```ruby
class Parent
  include Mongoid::Document
  include SimpleFormAttachments::HasAttachments

  has_one_attachment :attachment_pdf, class_name: 'AttachmentPdf'
  has_many_attachments :attachment_images, class_name: 'AttachmentImage'
end
```

Relations between the parent and Attachment are referenced, not embedded. The gem uses `belongs_to` for 1-1 relations and `has_and_belongs_to_many` for 1-n relations. This is to ensure that relations work with embedded parents, since the relations need to be stored on the owner's side.

You could use for example the `before_save` callback to embed the attachments yourself.

#### Callbacks

Since the attachments can be added/removed at will before the form of the owner is submitted, we need to indicate which ones have been in the end submitted with the form so that we can – immediately or later – delete the temporary ones.

For that each relation defines a method named after the relation name, which can be called for example via callback:

```ruby
after_save :mark_attachment_pdf_permanent
after_save :mark_attachment_images_permanent
```

These methods set (atomically) the attachment's `:temporary` attribute to `false`.

The `mark_all_attachments_permanent` method that loops through all attachment relations, triggering individual abovementioned methods, is also available. The two `after_save` callbacks above can be replaced with:

```ruby
after_save :mark_all_attachments_permanent
```

#### Validations

If you want to validate the number of attachments you can use for example the following validation. Eventual validation errors will be displayed to the user when submitting the parent form.

```ruby
validates :attachment_pdfs, length: { maximum: 2 }
```

### Routes

Mount the engine in your routes:

```ruby
  mount SimpleFormAttachments::Engine => "/"
```

This will include a default `/attachments` route.

### Forms

Now you can use the attachment input in your SimpleForm forms:

```ruby
= form.input :attachment_images, as: :attachment
```

## Configuration

### Sorting

Sorting of attachments is turned on by default for `has_many_attachments` relations. But it's possible to disable sorting on a field:

```slim
= f.input :attachment_images, as: :attachment, sortable: false
```

### Views

Uploaded attachments are displayed in a `table`. The gem will look for a partial using the normal rails partial lookup (with a fallback to the default partial), this makes it easy to define a partial for each of your attachment models.

Here is an example partial for a model called `AttachmentImage`:
```slim
/ app/views/simple_form_attachments/attachment_images/_attachment_image.html.slim
/ Note the simple_form_attachments prefix!

td.thumb
  div.thumb
    = image_tag attachment.thumb_url, alt: attachment.file_name

td.file_info
  = link_to attachment.file_name, attachment.file.url
  span.mime_type = attachment.file_mime_type
  span.size = attachment.file_size

- if attachment.errors.to_a.any?
  td.errors = render 'simple_form_attachments/errors', errors: attachment.errors.to_a

- else
  td.fields
    = fields.input :caption
```


#### Validation errors

If you want to show validation errors in your partial, simply include the `simple_form_attachments/errors` partial as shown above.

### Route

You can customize the engine to use a different controller and route, for example should you want to preprocess the uploaded files or determine the attachment model based on file mime/extension/format, ….

Setup a controller for your attachments:

```ruby
class AttachmentsController < SimpleFormAttachments::UploadController
  # The default controller uses the attachment type passed from the form input
  # to determine which Attachment class to create.
  #
  # This can be easily overriden, for instance if you want to determine
  # the class from the `mime type` of the file:
  #
  def attachment_class
    mime_type = params[:attachment][:file].content_type
    # TODO: very smart code to determine the class from the mime_type
  end
end
```

Add route as usual:

```ruby
resources :attachments, only: [:create]
```

Specify the route either app wide in an initializer:

```ruby
require 'simple_form_attachments'
# Configuration

SimpleFormAttachments::AttachmentInput.configure do |c|
  c.route = attachments_path
end
```

Or per input:

```slim
= f.input :attachment_images, as: :attachment, route: attachments_path
```

## Testing

Besides a `MiniTest` test suite, the gem has a dummy app located at `test/dummy`. Simply `cd` into the directory and run `bin rails s` to test the uploader.

## Contributing

1. Fork it ( https://github.com/tomasc/simple_form_attachments/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
