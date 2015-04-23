require "mongoid"
require "simple_form"

require "simple_form_attachments/attachment_input"
require "simple_form_attachments/configuration"
require "simple_form_attachments/engine"
require "simple_form_attachments/version"

require "handlebars"

require "jquery-ui-rails"
require "rails-assets-blueimp-file-upload"
require "rails-assets-handlebars"

require "i18n"

# ---------------------------------------------------------------------

module SimpleForm
  class FormBuilder
    map_type :attachment, to: SimpleFormAttachments::AttachmentInput
  end
end
