# frozen_string_literal: true

class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  # TODO: check which one is correct, above throws error
  protect_from_forgery
end
