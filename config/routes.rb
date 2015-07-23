Rails.application.routes.draw do
  get '(*route_params)' => 'home#index', as: :home
  root to: 'home#index'
end
