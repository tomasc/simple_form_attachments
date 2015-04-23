# require_relative '../../config/routes'
# This is broken :(

module SimpleFormAttachments
  class Configuration

    attr_accessor :route

    def initialize
      @route = SimpleFormAttachments::Engine.routes.url_helpers.attachments_path
    end

  end
end
