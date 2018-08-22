# frozen_string_literal: true

# app/controllers/users_controller.rb
class UsersController < ApplicationController
  before_action :authenticate_request, except: [:register, :login]
  # skip_before_action :authenticate_
  # POST /register
  def register
    @user = User.create(user_params)
    if @user.save
      #  if the user is saved attempt to log in with that user
      authenticate(user_params["email"], user_params["password"])
    else
      render json: {
          errors: @user.errors
      }.to_json, status: :bad
    end
  end

  def login
    authenticate params[:email], params[:password]
  end

  def current_user
    render json: {
      id: @current_user.id,
      name: @current_user.name,
      email: @current_user.email
    }.to_json, status: 200
  end

  private

    def user_params
      params.permit(
        :name,
          :email,
          :password
      )
    end

    def authenticate(email, password)
      command = AuthenticateUser.call(email, password)

      if command.success?
        render json: {
            access_token: command.result,
        }
      else
        if @user = User.find_by_email(email)
          render json: { password: "Incorrect password" }, status: :unauthorized
        else
          render json: { email: "No user with that email exists" }, status: :unauthorized
        end
      end
    end
end
