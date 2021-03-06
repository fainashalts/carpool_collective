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
    get '/view/:id' => 'carpools#get_carpool'
    resources :carpools, defaults: {format: :json}
    post '/carpools/:id/add' => 'carpools#add_user'
    post '/carpools/:id/delete' => 'carpools#remove_user'
    resources :users, defaults: {format: :json}
    post '/authenticate' => 'authentication#sign_in'
    get '/profile' => 'users#get_current_user'
    post '/carpools/:id/comments' => 'comments#create'
    # get '/carpools/:id/comments' => 'comments#index'
    
  
  end


  
end
