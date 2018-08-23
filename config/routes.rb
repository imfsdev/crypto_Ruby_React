# frozen_string_literal: true

# config/routes.rb
Rails.application.routes.draw do
  # register routes
  post "auth/register", to: "users#register"
  post "auth/login", to: "users#login"
  post "auth/current_user", to: "users#current_user"

  scope "/api" do
    resources :cryptocurrencies
    resources :user_cryptocurrencies
  end
  root to: redirect("index.html")
  get "*other", to: redirect("/")
end
