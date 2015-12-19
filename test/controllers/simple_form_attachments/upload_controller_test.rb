require 'test_helper'

require_relative '../../../app/controllers/simple_form_attachments/upload_controller'

module SimpleFormAttachments
  describe UploadController do

    setup do
      @routes = SimpleFormAttachments::Engine.routes
    end

    let(:params) {
      {
        attachment: { body: 'foo' },
        attachment_parent: { class: 'Parent' },
        attachment_relation: { name: 'attachments', multiple: true },
        attachment_type: "Attachment"
      }
    }
    let(:count) { Attachment.count }
    let(:action) { post :create, params }

    # ---------------------------------------------------------------------

    describe '#create' do
      it 'should succeed' do
        action
        must_respond_with :success
      end

      it 'should create attachment of specified model' do
        assert_difference '::Attachment.count' do
          action
        end
      end

      it 'must mark the newly upladed attachment as temporary' do
        action
        assigns(:attachment).must_be :present?
        assigns(:attachment).body.must_equal 'foo'
        assigns(:attachment).temporary.must_equal true
      end

      describe 'returned JSON' do
        it 'should contain template with correct locals' do
          action
          assert_template 'simple_form_attachments/_attachment_upload_template', locals: { multiple: true, parent_class: params[:attachment_parent][:class].constantize }
        end
      end
    end
  end
end
