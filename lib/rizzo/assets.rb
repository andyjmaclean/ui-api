require "rizzo/version"
require "rizzo/url_encryptor"

module Rizzo::Assets

  def self.precompile
    [
      'core.css',
      'core_ie.css',
      'core_fixed_width.css',
      'core_legacy.css',
      'core_legacy_ie.css',
      'omniture/s_code.js',
      'fonts.css',
      "fonts_woff2.css",
      'styleguide.css',
    ]
  end

  def self.precompile_as_engine
    [
      'core.css',
      'core_ie.css',
      'core_fixed_width.css',
      'omniture/s_code.js',
      "fonts.css",
      "fonts_woff2.css"
    ]
  end

end
