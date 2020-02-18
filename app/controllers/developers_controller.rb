class DevelopersController < ApplicationController
  def index; end

  def top_developers
    url = JSON.load(open("https://github-trending-api.now.sh/developers?language=ruby&since=#{params[:since]}"))
    render json: url
  end
end
