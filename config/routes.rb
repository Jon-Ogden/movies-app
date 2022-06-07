Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    get '/movies', to: 'movies#index'
    get '/movies/:id', to: 'movies#show'
    post '/movies', to: 'movies#create'
    put '/movies/:id', to: 'movies#update'
    delete '/movies/:id', to: 'movies#destroy'
  end
end
