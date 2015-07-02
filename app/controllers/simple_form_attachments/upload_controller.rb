module SimpleFormAttachments
  class UploadController < ActionController::Base

    def create
      res = attachment.save
      render json: attachment_json, status: (res ? :ok : :unprocessable_entity)
    end

    private # =============================================================

    def attachment
      @attachment ||= attachment_class.new attachment_params
    end

    def attachment_json
      { html: attachment_html }
    end

    def attachment_html
      render_to_string partial: 'simple_form_attachments/attachment_upload_template', locals: partial_locals
    end

    def partial_locals
      {
        parent: parent,
        parent_name: parent_name,
        parent_class: parent_class,
        child_index: child_index,
        attachment: attachment,
        multiple: multiple?,
        attachment_relation: params[:attachment_relation]
      }
    end

    def attachment_params
      params.require(:attachment).permit!
    end

    def parent_name
      params[:attachment_parent][:name]
    end

    def attachment_class
      params[:attachment_type].constantize
    end

    def parent_class
      return unless params[:attachment_parent]
      params[:attachment_parent][:class].constantize
    end

    def parent
      return unless params[:attachment_relation]
      if multiple? && attachment.errors.empty?
        parent_class.new{ |o| o.send(params.fetch(:attachment_relation).fetch(:name).to_sym) << attachment }
      else
        parent_class.new
      end
    end

    def child_index
      DateTime.now.strftime('%Q').to_i
    end

    # ---------------------------------------------------------------------

    def multiple?
      ['true', true, '1', 1].include? params.fetch(:attachment_relation, {}).fetch(:multiple, false)
    end

    def referenced?
      ['true', true, '1', 1].include? params.fetch(:attachment_relation, {}).fetch(:referenced, false)
    end

  end
end
