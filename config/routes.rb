# frozen_string_literal: true

# config/routes.rb
Rails.application.routes.draw do
  # register route
  post "auth/register", to: "users#register"
end
