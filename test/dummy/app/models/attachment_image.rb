class AttachmentImage
  include Mongoid::Document

  include SimpleFormAttachments::Attachment

  extend Dragonfly::Model
  extend Dragonfly::Model::Validations

  # ---------------------------------------------------------------------

  field :file_ext, type: String
  field :file_format, type: Symbol
  field :file_mime_type, type: String
  field :file_name, type: String
  field :file_size, type: Integer
  field :file_uid, type: String
  field :file_aspect_ratio, type: Float
  field :file_height, type: Integer
  field :file_width, type: Integer

  field :caption

  # ---------------------------------------------------------------------

  dragonfly_accessor :file

  # ---------------------------------------------------------------------

  # validates :file, presence: true

  validates_size_of :file, maximum: 500.kilobytes, message: 'is too big, should be maximum 500kb'

  # ---------------------------------------------------------------------

  # validates_property :ext, of: :file, in: ['jpg']
  # validates_property :format, of: :file, in: ['jpeg', 'gif']
  # validates_property :mime_type, of: :file, as: 'image/jpeg'

  # =====================================================================

  def thumb_url dimensions="100x100#", jpg_quality=75
    return unless file
    return file.url if (file.ext.present? && file.ext.to_sym == :svg)

    file.thumb(dimensions).url
  end

  # ---------------------------------------------------------------------

  # Append thumbnail
  #
  # @return [Hash]
  def as_json options={}
    super(options).merge(
      {
        thumb_url: thumb_url,
        caption: caption
      }
    )
  end

  # ---------------------------------------------------------------------

end
