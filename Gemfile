source 'https://rubygems.org'

# Specify your gem's dependencies in simple_form_epic_editor.gemspec
gemspec

case version = ENV['MONGOID_VERSION'] || '~> 7.0'
when /7/ then gem 'mongoid', '~> 7.0'
when /6/ then gem 'mongoid', '~> 6.0'
else gem 'mongoid', version
end

gem "webpacker", "~> 5.4.3"
