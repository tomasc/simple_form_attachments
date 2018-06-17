require 'simple_form'
require 'i18n'

module SimpleFormAttachments
  class AttachmentInput < SimpleForm::Inputs::Base
    class << self
      attr_accessor :configuration

      def configure
        @configuration ||= Configuration.new
        yield @configuration
      end

      def configuration
        @configuration ||= Configuration.new
      end
    end

    def input(wrapper_options)
      template.content_tag :div, merge_wrapper_options(input_html_options, wrapper_options) do
        template.concat attachment_blank_field
        template.concat attachment_file_field
        template.concat attachment_type_field
        template.concat attachment_multiple_field
        template.concat attachment_parent_class_field
        template.concat attachment_parent_name_field
        template.concat attachment_relation_key_field
        template.concat attachment_relation_name_field
        template.concat attachment_relation_class_field
        template.concat attachment_list
        template.concat handlebars_js_attachment_template
        template.concat handlebars_js_upload_error_template
      end
    end

    private

    def input_html_options
      super.merge(
        data: {
          attachments_path: options.fetch(:route, route_from_configuration),
          accept_file_types: accepted_file_types,
          max_file_size: max_file_size,
          min_file_size: min_file_size,
          max_number_of_files: max_number_of_files,
          disabled_submit_text: I18n.t(:disabled, scope: 'simple_form_attachments.buttons'),
          sortable: sortable?
        }.reject{ |k, v| v.nil? }
      )
    end

    def input_html_classes
      super.push(SimpleFormAttachments.dom_class)
    end

    # ---------------------------------------------------------------------

    def route_from_configuration
      res = AttachmentInput.configuration.route
      res.respond_to?(:call) ? res.call : res
    end

    # ---------------------------------------------------------------------

    def relation
      return unless @builder
      return unless @builder.object
      return unless @builder.object.relations
      relation = @builder.object.relations[attribute_name.to_s]
      raise "Relation #{attribute_name} not found" unless relation
      relation
    end

    def relation_key
      return unless relation
      relation.key
    end

    def relation_class_name
      return unless relation
      relation.class_name
    end

    def param_key
      @builder.object_name
    end

    # FIXME: this should be inferred also from the :as options!!
    def parent_class
      return @builder.object.model.class.name if @builder.object.class.name.to_s =~ /decorator\z/i
      @builder.object.class.name
    end

    def parent_name
      @builder.object_name
    end

    def relation_class
      relation.relation.to_s
    end

    # ---------------------------------------------------------------------

    def multiple?
      return false unless relation
      if Mongoid::Compatibility::Version.mongoid7_or_newer?
        !!relation.class.to_s.end_with?('Many')
      else
        !!relation.macro.to_s.end_with?('many')
      end
    end

    def referenced?
      return false unless relation
      !!relation_class.to_s.end_with?('Referenced')
    end

    def embedded?
      return false unless relation
      !!relation_class.to_s.end_with?('Embedded')
    end

    def sortable?
      options.fetch(:sortable, multiple?)
    end

    # ---------------------------------------------------------------------

    def attachments
      return @builder.object.send(attribute_name).to_a unless multiple?
      @builder.object.send(attribute_name).sort_by { |a| @builder.object.send(relation_key).index(a.id) }
    end

    def accepted_file_types
      options.fetch(:accept_file_types) {
        [ validated_extensions,
          validated_formats,
          validated_mime_types
        ].reject(&:blank?).flatten.uniq
      }.map do |file_type|
        file_type.to_s.start_with?('.') ? file_type : ".#{file_type}"
      end.uniq.sort
    end

    def max_file_size
      options.fetch(:max_file_size) do
        return unless validators
        return unless validator = validators.detect do |validator|
          validator.is_a?(ActiveModel::Validations::LengthValidator) &&
            validator.options.has_key?(:maximum)
        end
        validator.options.fetch(:maximum, nil)
      end
    end

    def min_file_size
      options.fetch(:min_file_size) do
        return unless validators
        return unless validator = validators.detect do |validator|
          validator.is_a?(ActiveModel::Validations::LengthValidator) &&
            validator.options.has_key?(:minimum)
        end
        validator.options.fetch(:minimum, nil)
      end
    end

    def max_number_of_files
      options.fetch(:max_number_of_files, nil)
    end

    # ---------------------------------------------------------------------

    def validated_extensions
      return unless file_validation_values_for(:ext)
      extensions = file_validation_values_for(:ext)
      extensions.map { |e| ".#{e}" }
    end

    def validated_formats
      return unless file_validation_values_for(:format)
      formats = file_validation_values_for(:format)
      formats.map { |f| ".#{f}" }
    end

    def validated_mime_types
      return unless file_validation_values_for(:mime_type)
      mime_types = file_validation_values_for(:mime_type)
      mime_types.map do |mime_type|
        "." + Mime::Type.lookup(mime_type).try(:symbol).try(:to_s)
      end
    end

    def file_validation_values_for(property)
      return unless file_validation_for(property)
      validation = file_validation_for(property)
      validation.map { |v| v.options.values_at(:as, :in) }.flatten.reject(&:blank?).uniq
    end

    def file_validation_for(property)
      return unless validators
      validators.select { |v| v.options[:property_name].to_s == property.to_s }
    end

    def validators(field = :file)
      relation_class_name.constantize.validators_on(field)
    end

    # ---------------------------------------------------------------------

    def attachment_blank_field
      if multiple?
        template.hidden_field_tag("#{parent_name}[#{relation_key}][]", nil)
      else
        template.hidden_field_tag("#{parent_name}[#{relation_key}]", nil)
      end
    end

    def attachment_file_field
      input_html_options = {
        multiple: multiple?,
        accept: accepted_file_types.join(","),
        class: 'file'
      }
      template.label_tag('attachment[file]') do
        template.file_field_tag('attachment[file]', input_html_options) +
        template.content_tag(:span, I18n.t(:choose_file, scope: 'simple_form_attachments.links', count: (multiple? ? 2 : 1)), class: SimpleFormAttachments.dom_class(:label, [:choose_file]))
      end
    end

    def attachment_type_field
      template.hidden_field_tag('attachment_type', relation_class_name)
    end

    def attachment_multiple_field
      template.hidden_field_tag('attachment[multiple]', multiple?.to_s)
    end

    def attachment_parent_class_field
      template.hidden_field_tag('attachment_parent[class]', parent_class)
    end

    def attachment_parent_name_field
      template.hidden_field_tag('attachment_parent[name]', parent_name)
    end

    def attachment_relation_name_field
      template.hidden_field_tag('attachment_relation[name]', @attribute_name)
    end

    def attachment_relation_class_field
      template.hidden_field_tag('attachment_relation[type]', relation_class.to_s)
    end

    def attachment_relation_referenced_field
      template.hidden_field_tag('attachment_relation[referenced]', referenced?)
    end

    def attachment_relation_key_field
      template.hidden_field_tag('attachment_relation[key]', relation_key.to_s)
    end

    # ---------------------------------------------------------------------

    def attachment_list
      container_classes = [SimpleFormAttachments.dom_class(:attachment_list)]
      container_classes << SimpleFormAttachments.dom_class(:attachment_list, :is_sortable) if sortable?
      template.content_tag :div, class: container_classes do
        @builder.simple_fields_for attribute_name do |attachment_fields|
          template.render(
            partial: attachment_fields.object.to_simple_form_partial_path, format: :html, layout: File.join('simple_form_attachments', 'attachment_layout'),
            locals: {
              attachment: attachment_fields.object,
              fields: attachment_fields,
              multiple: multiple?,
              form: @builder,
              relation_key: relation_key
            }
          )
        end
      end
    end

    # ---------------------------------------------------------------------

    def handlebars_js_attachment_template
      template.content_tag :script, id: 'simple_form_attachments__attachment_template', type: 'text/html' do
        template.render(File.join('simple_form_attachments', 'attachments', 'attachment.hbs.slim'))
      end
    end

    def handlebars_js_upload_error_template
      template.content_tag :script, id: 'simple_form_attachments__upload_error_template', type: 'text/html' do
        template.render(File.join('simple_form_attachments', 'attachments', 'upload_error.hbs.slim'))
      end
    end
  end
end
