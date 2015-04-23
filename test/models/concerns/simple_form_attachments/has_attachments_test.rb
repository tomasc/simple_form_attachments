require 'test_helper'
require_relative '../../../../app/models/concerns/simple_form_attachments/has_attachments'

describe Parent do

  let(:parent) { Parent.new }

  let(:attachment_reflection) { parent.reflect_on_association(:attachment) }
  let(:attachments_reflection) { parent.reflect_on_association(:attachments) }

  let(:related_attachment_one) { Attachment.create }
  let(:related_attachment_two) { Attachment.create }
  let(:unrelated_attachment) { Attachment.create }

  # ---------------------------------------------------------------------

  describe '.has_many_attachments' do
    before do
      [related_attachment_one, related_attachment_two].shuffle.each do |a|
        parent.attachments << a
      end
    end

    it 'allows to define relation name' do
      parent.must_respond_to :attachments
    end

    it 'respects definition of :class_name' do
      attachments_reflection.class_name.must_equal "Attachment"
    end

    it 'passes the :dependent option to the relation' do
      attachments_reflection.dependent.must_equal :destroy
    end

    it 'returns attachments in same order as in which its ids have been stored' do
      parent.attachments.sorted.must_equal parent.attachments.sort_by{ |a| parent.attachment_ids.index(a.id) }
    end

    it 'returns attachments in the same order as attachment_ids' do
      parent.attachment_ids = [related_attachment_one.id, related_attachment_two.id]
      parent.attachments.sorted.must_equal parent.attachments.sort_by{ |a| parent.attachment_ids.index(a.id) }
    end
  end

  # ---------------------------------------------------------------------

  describe '.has_one_attachment' do
    it 'allows to define relation name' do
      parent.must_respond_to :attachment
    end
    it 'respects definition of :class_name' do
      attachment_reflection.class_name.must_equal "Attachment"
    end
    it 'passes the :dependent option to the relation' do
      attachments_reflection.dependent.must_equal :destroy
    end
  end

  # ---------------------------------------------------------------------

  describe '#mark_all_attachments_permanent' do
    before do
      parent.attachments << related_attachment_one
      parent.attachment = related_attachment_two
    end

    it 'marks has_many attachments as permanent' do
      related_attachment_one.reload.temporary.must_equal true
      parent.send(:mark_all_attachments_permanent)
      related_attachment_one.reload.temporary.must_equal false
    end

    it 'marks has_one attachment as permanent' do
      related_attachment_two.reload.temporary.must_equal true
      parent.send(:mark_all_attachments_permanent)
      related_attachment_two.reload.temporary.must_equal false
    end

    it 'does not mark other attachments as permanent' do
      unrelated_attachment.temporary.must_equal true
    end
  end

  describe '#mark_attachments_permanent' do
    before do
      parent.attachments << related_attachment_one
    end
    it 'marks has_many attachments as permanent' do
      related_attachment_one.reload.temporary.must_equal true
      parent.send(:mark_attachments_permanent)
      related_attachment_one.reload.temporary.must_equal false
    end
    it 'does not mark other attachments as permanent' do
      unrelated_attachment.temporary.must_equal true
    end
  end

  describe '#mark_attachment_permanent' do
    before do
      parent.attachment = related_attachment_two
    end
    it 'marks has_many attachments as permanent' do
      related_attachment_two.reload.temporary.must_equal true
      parent.send(:mark_attachment_permanent)
      related_attachment_two.reload.temporary.must_equal false
    end
    it 'does not mark other attachments as permanent' do
      unrelated_attachment.temporary.must_equal true
    end
  end

  # ---------------------------------------------------------------------

end
