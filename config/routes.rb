# frozen_string_literal: true

# config/routes.rb
Rails.application.routes.draw do
  # register route
  post "auth/register", to: "users#register"
  post "auth/login", to: "users#login"
  get "test", to: "users#test"
end
