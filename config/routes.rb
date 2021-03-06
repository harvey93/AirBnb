Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :bookings, only: [:create, :destroy, :show, :index]
    resources :reviews, only: [:create, :destroy, :index, :update]
    resources :offices, only: [:create, :index, :show] do
      collection do
        get 'search'
      end
    end
  end

end
