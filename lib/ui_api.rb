$: << 'lib'
require "ui_api/version"
require "ui_api/url_encryptor"
require "ui_api/url_validator"
require "ui_api/assets"

module ui_api

end

require "ui_api/engine" if defined?(Rails)

