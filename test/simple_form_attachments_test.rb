require 'test_helper'

describe SimpleFormAttachments do
  describe '.dom_class' do
    it do
      dom_class = SimpleFormAttachments.dom_class
      dom_class.must_equal 'simple_form_attachments'
    end

    it do
      dom_class = SimpleFormAttachments.dom_class(:a)
      dom_class.must_equal 'simple_form_attachments__a'
    end

    it do
      dom_class = SimpleFormAttachments.dom_class(:a, :b, :c)
      dom_class.must_equal 'simple_form_attachments__a__b__c'
    end

    it do
      dom_class = SimpleFormAttachments.dom_class([:a, :b])
      dom_class.must_equal ['simple_form_attachments__a', 'simple_form_attachments__a__b']
    end

    it do
      dom_class = SimpleFormAttachments.dom_class(:a, [:b, :c])
      dom_class.must_equal ['simple_form_attachments__a__b', 'simple_form_attachments__a__b__c']
    end
  end
end
