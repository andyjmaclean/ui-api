module ComponentHelper

  def ui_data(cmp, properties)
    properties
  end
  
  
  def ui_component(slug, properties={})
    render "components/#{slug}", properties
  end

  
  def eu_component(slug, properties=false)
    if !properties
      render "components/#{slug}",  properties:{}
    else
      render "components/#{slug}",  properties
    end
  end

  
end
