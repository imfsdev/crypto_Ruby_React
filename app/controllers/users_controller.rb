# frozen_string_literal: true

# app/controllers/users_controller.rb
class UsersController < ApplicationController
  # skip_before_action :authenticate_request
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
    @user = JWT.decode request.env["HTTP_AUTHORIZATION"].scan(/Bearer(.*)$/).flatten.last, nil, false
    puts @user
    render json: {
      name: @user
    }.to_json, status: 200
  end

  def user_cryptocurrencies
    @user = User.find(params[:id])
    puts @user
  end

  def add_user_cryptocurrencies
    @user = User.find(params[:id])
    puts @user
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
