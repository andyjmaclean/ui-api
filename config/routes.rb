UiApi::Application.routes.draw do

  get "r/:encrypted_url"             => 'redirector#show', :as => :redirector
  get "redirector"                   => 'redirector#internal'

  # Custom layouts
  get 'secure/layouts/:route/:snippet'  => 'layout#snippet'
  get 'layouts/:route/:snippet'         => 'layout#snippet'
  get 'layouts/:route'                  => 'layout#preview'
  get 'layouts',                        to: redirect('/styleguide/page-layout/core-layouts')

  # Styleguide
  root                              to: redirect('/styleguide/atoms/colour')
  get 'styleguide/',                to: redirect('/styleguide/atoms/colour')
  
  get 'styleguide/js-components',   to: redirect('/styleguide/js-components/lightbox')
  
  get 'styleguide/page-layout/',    to: redirect('/styleguide/page-layout/core-layouts')
  get 'styleguide/widgets/',        to: redirect('/styleguide/widgets/flickr')

  get 'styleguide/atoms',           to: redirect('/styleguide/atoms/colour')
  get 'styleguide/molecules',       to: redirect('/styleguide/molecules/colours')
  get 'styleguide/organisms',       to: redirect('/styleguide/organisms/organism-1')
  get 'styleguide/templates',       to: redirect('/styleguide/templates/template-1')
  get 'styleguide/pages',           to: redirect('/styleguide/pages/page-1')

  get 'styleguide/*section' => 'styleguide#show', defaults: { route: "styleguide" }

  # Component UI over http
  get  'europeana/*cmp'        => 'europeana#snippet', defaults: { snippet: "head", route: "modern"  }
  post 'europeana/*cmp'        => 'europeana#snippet', defaults: { snippet: "head", route: "modern"  }

  # documentation    
  get 'documentation/*section' => 'documentation#show', defaults: { route: "styleguide" }


end if defined?(UiApi::Application)
