Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api do
  end

  # allow HTML5 routing
  get '(*route_params)' => 'home#index', as: :home
end
