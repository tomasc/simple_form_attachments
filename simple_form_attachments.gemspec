# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'simple_form_attachments/version'

Gem::Specification.new do |spec|
  spec.name          = 'simple_form_attachments'
  spec.version       = SimpleFormAttachments::VERSION
  spec.authors       = ['Tomas Celizna', 'Asger Behncke Jacobsen']
  spec.email         = ['tomas.celizna@gmail.com', 'asger@8kilo.com']
  spec.summary       = 'A Rails engine which takes care of creating Attachments using the jQuery File Upload plugin.'
  spec.homepage      = 'https://github.com/tomasc/simple_form_attachments'
  spec.license       = 'MIT'

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ['lib']

  # ---------------------------------------------------------------------

  spec.add_dependency 'rails', '>= 4.2'
  spec.add_dependency 'mongoid', '>= 6.0', '<= 7.0'
  spec.add_dependency 'simple_form', '>= 3.0.2'
  spec.add_dependency 'mongoid-compatibility'

  spec.add_dependency 'slim'

  # ---------------------------------------------------------------------

  spec.add_development_dependency 'bundler', '~> 1.12'
  spec.add_development_dependency 'coffee-rails'
  spec.add_development_dependency 'coveralls'
  spec.add_development_dependency 'database_cleaner'
  spec.add_development_dependency 'dragonfly'
  spec.add_development_dependency 'guard'
  spec.add_development_dependency 'guard-minitest'
  spec.add_development_dependency 'jquery-rails'
  spec.add_development_dependency 'minitest', '~> 5.11'
  spec.add_development_dependency 'minitest-rails'
  spec.add_development_dependency 'rails-controller-testing'
  spec.add_development_dependency 'rake', '~> 10.0'
  spec.add_development_dependency 'sass-rails'
  spec.add_development_dependency 'slim'
end
