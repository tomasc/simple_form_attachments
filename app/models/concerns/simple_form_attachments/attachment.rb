require 'mongoid'

module SimpleFormAttachments
  module Attachment
    extend ActiveSupport::Concern

    included do
      field :temporary, type: Mongoid::Boolean, default: false

      scope :temporary, -> { where(temporary: true) }
      scope :permanent, -> { where(temporary: false) }
    end

    def to_simple_form_partial_path
      File.join('simple_form_attachments', to_partial_path)
    end
  end
end
