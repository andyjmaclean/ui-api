module UiApi
  class Engine < Rails::Engine

    initializer "ui_api.configure_rails_initialization" do |app|

      app.routes.prepend do
        get 'breadcrumb'        => 'global_resources#breadcrumb'
        get "r/:encrypted_url"  => 'redirector#show', :as => :redirector
        get "redirector"        => 'redirector#internal', :as => :internal_redirector
      end

    end

    initializer "ui_api.update_asset_paths" do |app|
      app.config.assets.precompile += UiApi::Assets.precompile_as_engine
    end
  end
end
