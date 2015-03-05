class StyleguideController < ActionController::Base

  include LayoutSupport
  layout proc{|c| c.request.xhr? ? false : "styleguide" }
  before_filter :setup

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end
    
  def setup
    @app = StyleGuide.new(request.fullpath)
  end

  def show
    @fixed_width_layout = true
    set_locale
    render "/styleguide/#{params[:section]}", locals: get_layout_config(:styleguide)
  end

end
