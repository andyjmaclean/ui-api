module ComponentHelper

  def ui_component(slug, properties={})
    render "components/#{slug}", properties
  end

end
