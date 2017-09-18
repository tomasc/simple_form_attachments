require "mongoid"
require "simple_form"

require "simple_form_attachments/attachment_input"
require "simple_form_attachments/configuration"
require "simple_form_attachments/engine"
require "simple_form_attachments/version"

require "jquery-ui-rails"
require "rails-assets-numeraljs"
require "rails-assets-blueimp-file-upload"
require "rails-assets-handlebars"

require "i18n"

# ---------------------------------------------------------------------

module SimpleFormAttachments
  def self.dom_class(*args)
    prefix, alts = args.partition { |i| !i.is_a?(Array) }
    prefix = ['simple_form_attachments'] + prefix
    return prefix.compact.join('__') if alts.empty?
    alts.flatten.map do |item|
      prefix += [item]
      prefix.compact.join('__')
    end
  end

  def self.jquery_ui_asset(asset)
    jquery_ui_version = Gem::Version.new(Jquery::Ui::Rails::JQUERY_UI_VERSION)
    case
    when Gem::Dependency.new('', '< 1.12').match?('', jquery_ui_version) then "jquery-ui/#{asset}"
    when Gem::Dependency.new('', '>= 1.12').match?('', jquery_ui_version) then "jquery-ui/widgets/#{asset}"
    else raise "This version of jQuery UI is not supported"
    end
  end
end

module SimpleForm
  class FormBuilder
    map_type :attachment, to: SimpleFormAttachments::AttachmentInput
  end
end
