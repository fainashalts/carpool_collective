Rails.application.routes.draw do
  root 'home#index'

  resource :users, only: [:new, :create]

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'

  namespace :api do 
    resources :carpools, defaults: {format: :json}
  end
  
end
