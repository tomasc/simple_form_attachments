require 'test_helper'
require_relative '../../../../app/models/concerns/simple_form_attachments/attachment'

describe AttachmentTest do
  let(:temporary_attachment) { AttachmentTest.new(temporary: true) }
  let(:permanent_attachment) { AttachmentTest.new }

  before do
    temporary_attachment.save
    permanent_attachment.save
  end

  describe 'scopes' do
    describe ':temporary' do
      it 'has :temporary scope' do
        _(AttachmentTest).must_respond_to :temporary
      end

      it 'returns the temporary attachments' do
        _(AttachmentTest.temporary.to_a).must_include temporary_attachment
      end

      it 'does not return the temporary attachments for' do
        _(AttachmentTest.temporary.to_a).wont_include permanent_attachment
      end
    end

    describe ':permanent' do
      it 'has :permanent scope' do
        _(AttachmentTest).must_respond_to :permanent
      end

      it 'returns the permanent attachments' do
        _(AttachmentTest.permanent.to_a).must_include permanent_attachment
      end

      it 'does not return the temporary attachments for' do
        _(AttachmentTest.permanent.to_a).wont_include temporary_attachment
      end
    end
  end

  describe '#temporary' do
    it 'it should have field :temporary' do
      _(temporary_attachment).must_respond_to :temporary
    end

    it 'should default to true' do
      _(temporary_attachment.temporary).must_equal true
    end
  end
end
