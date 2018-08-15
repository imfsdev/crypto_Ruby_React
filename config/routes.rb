# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    resources :examples
    devise_for :users, controllers: { sessions: "sessions" }
    devise_scope :user do
      get "users/current", to: "sessions#show"
    end
  end
  # TODO: check if this needs to be scoped to /api later
  # devise_for :admin_users, ActiveAdmin::Devise.config
  # TODO: enable activeadmin routes
  # ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope "/api" do
    resources :cryptocurrencies
  end
end
