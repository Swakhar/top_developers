Rails.application.routes.draw do
  get :ruby_developers, to: 'developers#top_developers'
  root 'developers#index'
end
