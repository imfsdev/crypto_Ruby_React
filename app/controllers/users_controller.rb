# frozen_string_literal: true

# app/controllers/users_controller.rb
class UsersController < ApplicationController
  # TODO: skip_before_action :authenticate_request, only: %i[login register]
  skip_before_action :authenticate_request
  # POST /register
  def register
    @user = User.create(user_params)
    if @user.save
      #  if the user is saved attempt to log in with that user
      authenticate(user_params["email"], user_params["password"])
    else
      render json: {
        status: 500,
        errors: @user.errors
      }.to_json, status: 500
    end
  end

  def login
    authenticate params[:email], params[:password]
  end

  def test
    render json: {
          message: "You have passed authentication and authorization test"
        }
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
           message: "Login Successful"
         }
       else
         render json: { error: command.errors }, status: :unauthorized
       end
     end
end
