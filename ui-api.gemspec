# -*- encoding: utf-8 -*-
require File.expand_path('../lib/rizzo/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ["Europeana"]
  gem.email         = ["andyjmaclean@gmail.com"]
  gem.description   = %q{Common UI Application}
  gem.summary       = %q{Rails engine for centralising user interface logic}
  gem.homepage      = "https://github.com/europeana/ui-api"

  gem.files         = `git ls-files`.split($\)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(spec|features)/})
  gem.name          = "ui-api"
  gem.require_paths = ["lib"]
  gem.version       = Rizzo::VERSION

  gem.add_dependency 'haml'
  gem.add_dependency 'sass'
  gem.add_dependency 'addressable'
  gem.add_dependency 'sanitize'
  gem.add_dependency 'redcarpet'

  gem.add_development_dependency 'capybara'
  gem.add_development_dependency 'cucumber'
  gem.add_development_dependency 'cucumber-rails'
  gem.add_development_dependency 'unicorn'
  gem.add_development_dependency 'rake'

end