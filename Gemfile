source 'https://rubygems.org'

ruby '2.2.0'

gem 'rails', '~> 4.1.8'
gem 'i18n', '0.7.0'
gem 'haml'
gem 'sass'
gem 'sass-globbing'
gem 'haml-rails'

gem 'sass-rails'
#gem 'coffee-rails'
#gem 'coffee-script-source'

gem 'requirejs-rails', git: 'https://github.com/jwhitley/requirejs-rails.git'

#gem 'uglifier'


gem 'autoprefixer-rails'
gem 'unicorn'
gem 'rake'
gem 'sanitize'
gem 'dotenv'
gem 'redcarpet'
gem 'image-resizer', git: 'https://github.com/lonelyplanet/image-resizer.git', require: 'image_resizer'

group :test do
  gem 'rspec-rails', '~> 2.14.0'
  gem 'rubyzip', '< 1.0.0'
  gem 'selenium-webdriver', '2.26.0'
  gem 'capybara', '< 2.0.0'
  gem 'cucumber-rails', :require => false
end

group :development do
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'pry-rails'
end

group :production do
  gem "lograge"
  gem "logstash-event"
  gem "airbrake"
  gem 'rails_12factor'
end

gemspec

