# frozen_string_literal: true

class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  # TODO: check which one is correct, above throws error
  protect_from_forgery
  # any action from the UI should be authenticated
  # TODO: fix needing to sign in to begin logging in to admin dashboard
  before_action :authenticate_user!
end
