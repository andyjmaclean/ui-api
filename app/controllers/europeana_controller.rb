require 'json'

class EuropeanaController < ActionController::Base

  layout nil

  #include LayoutSupport

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end


  def snippet
    
    # test url for JSON parsing = http://0.0.0.0:3000/europeana/molecules/_colours?properties=%7B"brand_colours":%7B"jade_green":"Celtic-Green"%7D%7D&locale=it
    #
    #  1st param is url encoded version of this single override: 
    #
    #  {
    #    "brand_colours":{
    #      "jade_green":"Celtic-Green"
    #    }
    #  }
    #
    #  2nd param is the locale
    #
    # The overridden value should be translated by the client.  The style guide should handle the localisation of the defaults only (IMO)
    #
    #
            
    set_locale

    props = params['properties']
    props = props ? JSON.load(props) : {}
        
    logger.info('props = ' + props.to_s)

    render "components/" + params['cmp'], locals: {:properties  => props.deep_symbolize_keys}
  end

  def preview
    @fixed_width_layout = true if params[:route] == "fixed-width"

    layout_details = get_layout(params[:route])
    render layout_details[:template], layout: layout_details[:layout], locals: get_layout_config(params[:route])
  end

end
