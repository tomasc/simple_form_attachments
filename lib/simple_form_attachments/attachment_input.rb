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

    # =====================================================================

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
        template.concat handlebars_js_template
      end
    end

    private # =============================================================

    def input_html_options
      super.merge!(
        data: {
          attachments_path: options.fetch(:route, route_from_configuration),
          max_number_of_files: options.fetch(:max_number_of_files, nil),
          disabled_submit_text: I18n.t(:disabled, scope: 'simple_form_attachments.buttons'),
          sortable: sortable?.to_s
        }
      )
    end

    def input_html_classes
      super.push('simple_form_attachments')
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
      !!relation.macro.end_with?('many')
    end

    def referenced?
      return false unless relation
      !!relation_class.end_with?('Referenced')
    end

    def embedded?
      return false unless relation
      !!relation_class.end_with?('Embedded')
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
      return unless validators
      [
        validated_extensions,
        validated_formats,
        validated_mime_types
      ].reject(&:blank?).flatten.join(',')
    end

    # ---------------------------------------------------------------------

    def validated_extensions
      return unless validators
      return unless file_validation_values_for(:ext)
      extensions = file_validation_values_for(:ext)
      extensions.map { |e| ".#{e}" }
    end

    def validated_formats
      return unless validators
      return unless file_validation_values_for(:format)
      formats = file_validation_values_for(:format)
      formats.map { |f| ".#{f}" }
    end

    def validated_mime_types
      return unless validators
      return unless file_validation_values_for(:mime_type)
      mime_types = file_validation_values_for(:mime_type)
      mime_types
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
        accept: accepted_file_types,
        class: 'file'
      }
      template.label_tag('attachment[file]') do
        template.file_field_tag('attachment[file]', input_html_options)
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
      table_classes = %w(attachments list)
      table_classes << 'sortable' if sortable?
      template.content_tag :table, class: table_classes do
        @builder.simple_fields_for attribute_name do |attachment_fields|
          template.render(
            partial: "simple_form_attachments/#{attachment_fields.object.to_partial_path}", format: :html, layout: 'layouts/simple_form_attachments/attachment_layout',
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

    def handlebars_js_template
      template.content_tag :script, id: 'attachment_template', type: 'text/html' do
        template.render('simple_form_attachments/attachments/attachment.hbs.slim')
      end
    end
  end
end
