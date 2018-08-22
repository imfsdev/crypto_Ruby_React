# frozen_string_literal: true

# config/routes.rb
Rails.application.routes.draw do
  # register route
  post "auth/register", to: "users#register"
  post "auth/login", to: "users#login"
  post "auth/current_user", to: "users#current_user"
  # get "auth/user_cryptocurrencies", to: "users#user_cryptocurrencies"
  # post "auth/user_cryptocurrencies", to: "users#add_user_cryptocurrencies"
  # delete "auth/user_cryptocurrencies", to: "users#remove_user_cryptocurrencies"


  scope "/api" do
    resources :cryptocurrencies
  end
  scope "/api" do
    resources :user_cryptocurrencies
  end
end
