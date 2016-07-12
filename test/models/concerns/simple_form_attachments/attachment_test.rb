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
        AttachmentTest.must_respond_to :temporary
      end

      it 'returns the temporary attachments' do
        AttachmentTest.temporary.to_a.must_include temporary_attachment
      end

      it 'does not return the temporary attachments for' do
        AttachmentTest.temporary.to_a.wont_include permanent_attachment
      end
    end

    describe ':permanent' do
      it 'has :permanent scope' do
        AttachmentTest.must_respond_to :permanent
      end

      it 'returns the permanent attachments' do
        AttachmentTest.permanent.to_a.must_include permanent_attachment
      end

      it 'does not return the temporary attachments for' do
        AttachmentTest.permanent.to_a.wont_include temporary_attachment
      end
    end
  end

  describe '#temporary' do
    it 'it should have field :temporary' do
      temporary_attachment.must_respond_to :temporary
    end

    it 'should default to true' do
      temporary_attachment.temporary.must_equal true
    end
  end
end
