require 'mongoid'

module SimpleFormAttachments
  module Attachment
    extend ActiveSupport::Concern

    included do
      include Mongoid::Document

      field :temporary, type: Boolean, default: true

      scope :temporary, -> { where(temporary: true) }
      scope :permanent, -> { where(temporary: false) }
    end
  end
end
