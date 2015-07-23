Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api do
    resource :time, only: [:show]
  end

  # allow HTML5 routing
  get '(*route_params)' => 'home#index', as: :home
end
