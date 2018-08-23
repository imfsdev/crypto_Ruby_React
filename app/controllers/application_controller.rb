 # frozen_string_literal: true

 # app/controllers/authentication_controller.rb

 class ApplicationController < ActionController::API
   before_action :authenticate_request, except: [:register, :login]
   attr_reader :current_user


   include ExceptionHandler

   def fallback_index_html
     render file: "public/index.html"
 end

  private
    def authenticate_request
      @current_user = AuthorizeApiRequest.call(request.headers).result
      render json: { error: "Not Authorized" }, status: 401 unless @current_user
    end
 end
