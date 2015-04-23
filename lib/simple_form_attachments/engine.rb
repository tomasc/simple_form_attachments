module SimpleFormAttachments
  class Engine < ::Rails::Engine

    engine_name = :simple_form_attachments

    # Add yml files to I18n
    I18n.load_path += Dir[ SimpleFormAttachments::Engine.root.join('config', 'locales', '**', '*.{rb,yml}') ]
  end
end
