module SimpleFormAttachments
  class UploadController < ActionController::Base
    def show
      @attachment = attachment_class.find(params[:id])
      render json: { html: attachment_html(@attachment) }, status: :ok
    end

    def create
      @attachment = new_attachment
      res = @attachment.save
      render json: { html: attachment_html(@attachment) }, status: (res ? :ok : :unprocessable_entity)
    end

    private # =============================================================

    def new_attachment
      attachment_class.new(attachment_params).tap do |att|
        att.temporary = true
      end
    end

    def attachment_html(attachment)
      render_to_string(partial: 'simple_form_attachments/attachment_upload_template', locals: partial_locals.merge(attachment: attachment))
    end

    def partial_locals
      {
        attachment_relation: attachment_relation,
        child_index: child_index,
        multiple: multiple?,
        parent: parent,
        parent_class: parent_class,
        parent_name: parent_name
      }
    end

    def attachment_params
      params.require(:attachment).permit!
    end

    def attachment_class
      params.fetch(:attachment_type).constantize
    end

    def attachment_relation
      params.fetch(:attachment_relation, {})
    end

    def attachment_relation_name
      return unless attachment_relation.present?
      attachment_relation.fetch(:name).to_sym
    end

    def attachment_relation_key
      return unless attachment_relation.present?
      attachment_relation.fetch(:key).to_sym
    end

    def child_index
      DateTime.now.strftime('%Q').to_i
    end

    def multiple_from_params
      attachment_relation.fetch(:multiple, false)
    end

    def multiple?
      ['true', true, '1', 1].include?(multiple_from_params)
    end

    def referenced_from_params
      attachment_relation.fetch(:referenced, false)
    end

    def referenced?
      ['true', true, '1', 1].include?(referenced_from_params)
    end

    def parent
      return unless attachment_relation_name.present?
      parent_class.new
    end

    def attachment_parent
      params.fetch(:attachment_parent, {})
    end

    def parent_class
      attachment_parent.fetch(:class, nil).safe_constantize
    end

    def parent_name
      attachment_parent.fetch(:name, nil)
    end
  end
end
