class Test
  include Mongoid::Document
  include SimpleFormAttachments::HasAttachments

  has_many_attachments :attachment_images, class_name: 'AttachmentImage', order: -> { attachment_images.id }
  validates :attachment_images, length: { maximum: 2 }

  # p attachment_images

  # sort_by { |u| ids.index(u.id) }

end
