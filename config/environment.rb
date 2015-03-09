# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
UiApi::Application.initialize! if defined?(UiApi::Application)
