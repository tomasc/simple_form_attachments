require 'test_helper'

describe SimpleFormAttachments::UploadController do
  before do
    @routes = SimpleFormAttachments::Engine.routes
  end

  let(:count) { AttachmentTest.count }

  # ---------------------------------------------------------------------

  describe '#create' do
    let(:params) do
      {
        attachment: { body: 'foo' },
        attachment_parent: { class: 'Parent' },
        attachment_relation: { name: 'attachments', multiple: true },
        attachment_type: 'AttachmentTest'
      }
    end
    let(:action) { post :create, params: params }

    it 'should succeed' do
      action
      must_respond_with :success
    end

    it 'should create attachment of specified model' do
      assert_difference('AttachmentTest.count') { action }
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

  # ---------------------------------------------------------------------

  describe '#show' do
    let(:attachment) { AttachmentTest.create! }
    let(:params) do
      {
        id: attachment.id.to_s,
        attachment_parent: { class: 'Parent' },
        attachment_relation: { name: 'attachments', multiple: true },
        attachment_type: 'AttachmentTest'
      }
    end
    let(:action) { get :show, params: params }

    it 'should succeed' do
      action
      must_respond_with :success
    end

    describe 'returned JSON' do
      it 'should contain template with correct locals' do
        action
        assert_template 'simple_form_attachments/_attachment_upload_template', locals: { multiple: true, parent_class: params[:attachment_parent][:class].constantize }
      end
    end
  end
end
