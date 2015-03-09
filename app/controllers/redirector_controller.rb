class RedirectorController < ActionController::Base
  include RedirectorSupport
  
  def show
    encrypted_url = params[:encrypted_url]
    url           = UiApi::UrlEncryptor.decrypt(encrypted_url)

    increment_stats_bucket_for_redirected_url(url)
    redirect_to(url)
  rescue UiApi::UrlEncryptor::BadUrl
    increment_stats_bucket_for_bad_redirected_url(encrypted_url)
    render :status => :bad_request, :nothing => true
  end

  def internal
    begin
      url = UiApi::UrlValidator.validate(params[:url])
      redirect_to url
    rescue UiApi::UrlValidator::InvalidUrl
      render text: 'Not Found', status: '404'
    end
  end
end
