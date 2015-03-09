UiApi::Application.configure do
  config.cache_classes = false

  config.whiny_nils = true

  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false
  
  config.active_support.deprecation = :log

  config.action_dispatch.best_standards_support = :builtin

  config.assets.debug = true
  config.assets.compress = false
  config.cache_classes = false
  config.eager_load = false
  config.assets.cache_store = :null_store  # Disables the Asset cache
  config.sass.cache = false  # Disable the SASS compiler cache
  
end if defined?(UiApi::Application)
