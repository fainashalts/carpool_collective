Rails.application.routes.draw do
  root 'users#new'

  resource :users, only: [:new, :create]

  get '/home' => "home#index"

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'

  namespace :api do 
    resources :carpools, defaults: {format: :json}
  end

  
end
