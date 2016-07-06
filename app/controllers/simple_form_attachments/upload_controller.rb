module SimpleFormAttachments
  class UploadController < ActionController::Base
    def show
      @attachment = attachment_class.find(params[:id])
      render json: { html: attachment_html }, status: :ok
    end

    def create
      @attachment = attachment_class.new({ temporary: true }.merge(attachment_params))
      res = @attachment.save
      render json: { html: attachment_html }, status: (res ? :ok : :unprocessable_entity)
    end

    private # =============================================================

    def attachment_html
      render_to_string(partial: 'simple_form_attachments/attachment_upload_template', locals: partial_locals.merge(attachment: @attachment))
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
      attachment_relation.fetch(:name).to_sym
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
      return unless params[:attachment_relation].present?
      return parent_class.new unless multiple? && @attachment.errors.empty?
      parent_class.new do |obj|
        obj.send(attachment_relation_name) << @attachment
      end
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
