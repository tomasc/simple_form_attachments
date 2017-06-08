ENV["RAILS_ENV"] = "test"

# ---------------------------------------------------------------------

require File.expand_path("../dummy/config/environment.rb",  __FILE__)

require "rails/test_help"
require 'minitest/rails'
require 'minitest/spec'
require 'slim'
require 'database_cleaner'
require 'mongoid'

require 'rails-controller-testing'
Rails::Controller::Testing.install

require 'simple_form_attachments'

# ---------------------------------------------------------------------

if ENV["CI"]
  require "coveralls"
  Coveralls.wear!
end

ENV["MONGOID_TEST_HOST"] ||= "localhost"
ENV["MONGOID_TEST_PORT"] ||= "27017"

HOST = ENV["MONGOID_TEST_HOST"]
PORT = ENV["MONGOID_TEST_PORT"].to_i

def database_id
  "simple_form_attachments_test"
end

CONFIG = {
  clients: {
    default: {
      database: database_id,
      hosts: [ "#{HOST}:#{PORT}" ]
    }
  }
}

Mongoid.configure do |config|
  config.load_configuration(CONFIG)
end

DatabaseCleaner.orm = :mongoid
DatabaseCleaner.strategy = :truncation

class MiniTest::Spec
  before(:each) { DatabaseCleaner.start }
  after(:each) { DatabaseCleaner.clean }
end

# ---------------------------------------------------------------------

class AttachmentTest
  include Mongoid::Document
  include SimpleFormAttachments::Attachment
  field :body, type: String
end

class Parent
  include Mongoid::Document
  include SimpleFormAttachments::HasAttachments

  has_one_attachment :attachment, class_name: 'AttachmentTest', dependent: :destroy
  has_many_attachments :attachments, class_name: 'AttachmentTest', dependent: :destroy
end
