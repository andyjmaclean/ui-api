module ComponentHelper

  def ui_data(cmp, properties)
    properties
  end
  
  
  def ui_component(slug, properties={})
    render "components/#{slug}", properties
  end


      
  def eu_component(template, properties=false)
    
    # load data for this component
    
    cmp_data = {}
    begin
      data_path = File.expand_path('../../data/' + template + '/' + I18n.locale.to_s + '.yml', __FILE__);
      if File.exist?(data_path)
        cmp_data = YAML.load(File.read(data_path))[I18n.locale.to_s]
      end
    end

    # merge component data with any data passed in
    
    if(properties && properties[:properties])
      properties = properties[:properties]
    else
      properties = {}
    end
    
    properties = JSON.parse(properties.to_json)  
    cmp_data  =  cmp_data.deep_merge(properties)
        
    
    # render
    if !properties
      render "components/#{template}",  properties:{}
    else
      render "components/#{template}",  properties:cmp_data
    end
    
  end

  
end
