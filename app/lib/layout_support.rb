module LayoutSupport

  def layout_defaults
    {
      about:          true,
      ads_header:     true,
      ads_footer:     false,
      include_js:     true,
      languages:      true,
      nav_primary:    true,
      search:         true,
      nav_sitemap:    true,
      tynt:           true,
      user_nav:       true,
      third_party:    false,
      legacy_lp:      false,
      app_core:       false,
      default_title:  true
    }
  end

  def layout_options
    {
      india: {
        about:          false,
        ads_header:     true,
        include_js:     true,
        nav_primary:    false,
        search:         false,
        nav_sitemap:    false,
        user_nav:       false,
        tynt:           false,
        third_party:    true,
        app_core:       true,
        default_title:  false
      },
      modern: {
        app_core:       true,
        default_title:  false
      },
      external: {
        default_title:  false
      },
      noscript: {
        include_js:     false,
        tynt:           false,
        legacy_lp:      true,
        secure:         true
      },
      secure: {
        tynt:           false,
        secure:         true,
        legacy_lp:      true
      },
      client_solutions: {
        include_js:     false,
        user_nav:       false,
        nav_sitemap:    false,
        ads_header:     false
      },
      styleguide: {
        tynt:           false
      },
      legacy: {
        legacy_lp:      true
      },
      legacy_responsive: {
        legacy_lp:      false
      }
    }
  end

  def get_layout_config(layout_type)
    if layout_options[:"#{layout_type}"]
      layout_defaults.merge(layout_options[:"#{layout_type}"])
    else
      layout_defaults
    end
  end

  def get_layout(route)
    return {
      layout: 'responsive',
      template: "layouts/examples/responsive"
    }
  end

end
