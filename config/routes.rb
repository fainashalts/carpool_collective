Rails.application.routes.draw do
  # root 'users#new'

  # # resource :users, only: [:new, :create]

  root "home#index"

  # get '/login' => 'sessions#new'
  # post '/login' => 'sessions#create'
  # delete '/logout' => 'sessions#destroy'

  # root 'application#index'
  # get '*path' => 'application#index'

  # return 200 for OPTION requests (used with cross-domain scripting)
  match '*all' => 'application#handle_options', via: :options

  namespace :api do 
    resources :carpools, defaults: {format: :json}
    resources :users, defaults: {format: :json}
    post '/authenticate' => 'authentication#sign_in'
  end


  
end
