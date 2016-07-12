module SimpleFormAttachments
  class Configuration
    attr_accessor :route

    def route
      @route ||= SimpleFormAttachments::Engine.routes.url_helpers.attachments_path
    end
  end
end
