# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'simple_form_attachments/version'

Gem::Specification.new do |spec|
  spec.name          = "simple_form_attachments"
  spec.version       = SimpleFormAttachments::VERSION
  spec.authors       = ["Tomas Celizna"]
  spec.email         = ["tomas.celizna@gmail.com"]
  spec.summary       = %q{Makes attachments neat and stuff}
  spec.description   = %q{Makes attachments neat and stuff}
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  # ---------------------------------------------------------------------

  spec.add_dependency "rails", ">= 4.2"
  spec.add_dependency "simple_form", ">= 3.0.2"

  spec.add_dependency "handlebars"
  spec.add_dependency "slim"

  spec.add_dependency "jquery-ui-rails"
  spec.add_dependency "rails-assets-blueimp-file-upload", ">= 9.6.0"
  spec.add_dependency "rails-assets-handlebars"

  # ---------------------------------------------------------------------

  spec.add_development_dependency "bundler", "~> 1.6"
  spec.add_development_dependency "coveralls"
  spec.add_development_dependency "database_cleaner"
  spec.add_development_dependency "guard"
  spec.add_development_dependency "guard-minitest"
  spec.add_development_dependency "minitest-rails"
  spec.add_development_dependency "dragonfly"
  spec.add_development_dependency "rake"
  spec.add_development_dependency "mongoid", "~> 4.0"

end
