require 'mongoid'

module SimpleFormAttachments
  module Attachment
    extend ActiveSupport::Concern

    included do
      include Mongoid::Document

      field :temporary, type: Boolean, default: false

      scope :temporary, -> { where(temporary: true) }
      scope :permanent, -> { where(temporary: false) }
    end

    def to_simple_form_partial_path
      ['simple_form_attachments', to_partial_path].join('/')
    end
  end
end
