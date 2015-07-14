require 'mongoid'

module SimpleFormAttachments
  module HasAttachments

    extend ActiveSupport::Concern

    module ClassMethods

      def attachment_accessor_names
        @@attachment_accessor_names ||= []
      end

      # ---------------------------------------------------------------------

      def has_many_attachments accessor_name, opts={}
        attachment_accessor_names << accessor_name

        options = {
          class_name: opts[:class_name] || 'SimpleFormAttachments::Attachment',
          dependent: opts[:dependent],
          inverse_of: nil
        }

        has_and_belongs_to_many accessor_name, options do
          # FIXME: ideally the relation would return the attachments already sorted,
          # but that does not seem to be possible at the moment
          #
          # or at least we maintain the query and sort on the db level,
          # but as of not it is not possible to provide custom sort function to mongodb
          #
          define_method "sorted" do
            target.sort_by { |attachment| base.send("#{accessor_name.to_s.singularize}_ids").index(attachment.id) }
          end
        end

        accepts_nested_attributes_for accessor_name

        define_method "mark_#{accessor_name}_permanent" do
          self.send(accessor_name).update(temporary: false) if self.send(accessor_name)
        end
      end

      # ---------------------------------------------------------------------

      def has_one_attachment accessor_name, opts={}
        attachment_accessor_names << accessor_name

        options = {
          class_name: opts[:class_name] || 'SimpleFormAttachments::Attachment',
          dependent: opts[:dependent]
        }

        belongs_to accessor_name, options

        accepts_nested_attributes_for accessor_name

        define_method "mark_#{accessor_name}_permanent" do
          self.send(accessor_name).update(temporary: false) if self.send(accessor_name)
        end
      end
    end

    private # =============================================================

    def mark_all_attachments_permanent
      self.class.attachment_accessor_names.each do |accessor_name|
        self.send("mark_#{accessor_name}_permanent")
      end
    end

  end
end
