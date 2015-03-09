require "ui_api/version"
require "ui_api/url_encryptor"

module UiApi::Assets

  def self.precompile
    [
      'core.css',
      'core_ie.css',
      'core_fixed_width.css',
      'core_legacy.css',
      'core_legacy_ie.css',
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
      "fonts.css",
      "fonts_woff2.css"
    ]
  end

end
