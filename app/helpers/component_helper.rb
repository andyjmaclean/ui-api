module ComponentHelper

  def ui_data(cmp, properties)
    properties
  end
  
  
  #def ui_component(slug, properties={})
  #  render "components/#{slug}", properties
  #end

  
  
  def ui_component(slug, properties=JSON.parse({"europeana"=>"json"}.to_json))
  #def ui_component(slug, properties={} )

    
    #render "components/#{slug}", ui_data(slug, properties)
    render "components/#{slug}",  properties
  end

  
end
