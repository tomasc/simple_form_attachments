require 'mongoid'
require 'mongoid-compatibility'

module SimpleFormAttachments
  module HasAttachments
    extend ActiveSupport::Concern

    module ClassMethods
      def attachment_accessor_names
        @@attachment_accessor_names ||= []
      end

      # ---------------------------------------------------------------------

      def has_many_attachments(accessor_name, opts = {})
        attachment_accessor_names << accessor_name

        options = {
          class_name: opts.fetch(:class_name, nil),
          dependent: opts.fetch(:dependent, nil),
          inverse_of: opts.fetch(:inverse_of, nil),
          index: opts.fetch(:index, nil),
        }.compact

        has_and_belongs_to_many accessor_name, options do
          # FIXME: ideally the relation would return the attachments already sorted,
          # but that does not seem to be possible at the moment
          #
          # or at least we maintain the query and sort on the db level,
          # but as of not it is not possible to provide custom sort function to mongodb
          #
          define_method :sorted do
            if Mongoid::Compatibility::Version.mongoid7_or_newer?
              @_target.sort_by do |attachment|
                @_base.send("#{accessor_name.to_s.singularize}_ids").index(attachment.id)
              end
            else
              target.sort_by do |attachment|
                base.send("#{accessor_name.to_s.singularize}_ids").index(attachment.id)
              end
            end
          end
        end

        accepts_nested_attributes_for accessor_name

        define_method :"mark_#{accessor_name}_permanent" do
          send(accessor_name).update_all(temporary: false)
        end
      end

      # ---------------------------------------------------------------------

      def has_one_attachment(accessor_name, opts = {})
        attachment_accessor_names << accessor_name

        options = {
          class_name: opts.fetch(:class_name, nil),
          dependent: opts.fetch(:dependent, nil),
          optional: opts.fetch(:optional, true),
          index: opts.fetch(:index, nil),
        }.compact

        belongs_to accessor_name, options

        accepts_nested_attributes_for accessor_name

        define_method "mark_#{accessor_name}_permanent" do
          send(accessor_name).update(temporary: false) if send(accessor_name)
        end
      end
    end

    private # =============================================================

    def mark_all_attachments_permanent
      self.class.attachment_accessor_names.each do |accessor_name|
        send("mark_#{accessor_name}_permanent")
      end
    end
  end
end
