require 'test_helper'

describe SimpleFormAttachments do
  describe '.dom_class' do
    it do
      dom_class = SimpleFormAttachments.dom_class
      _(dom_class).must_equal 'simple_form_attachments'
    end

    it do
      dom_class = SimpleFormAttachments.dom_class(:a)
      _(dom_class).must_equal 'simple_form_attachments__a'
    end

    it do
      dom_class = SimpleFormAttachments.dom_class(:a, :b, :c)
      _(dom_class).must_equal 'simple_form_attachments__a__b__c'
    end

    it do
      dom_class = SimpleFormAttachments.dom_class([:a, :b])
      _(dom_class).must_equal ['simple_form_attachments__a', 'simple_form_attachments__a__b']
    end

    it do
      dom_class = SimpleFormAttachments.dom_class(:a, [:b, :c])
      _(dom_class).must_equal ['simple_form_attachments__a__b', 'simple_form_attachments__a__b__c']
    end
  end
end
