class Test
  include Mongoid::Document
  include SimpleFormAttachments::HasAttachments

  has_many_attachments :attachment_images, class_name: 'AttachmentImage', order: -> { attachment_images.id }
  validates :attachment_images, length: { maximum: 2 }

  has_many_attachments :other_attachment_images, class_name: 'AttachmentImage', order: -> { other_attachment_images.id }
  validates :other_attachment_images, length: { maximum: 2 }
end
