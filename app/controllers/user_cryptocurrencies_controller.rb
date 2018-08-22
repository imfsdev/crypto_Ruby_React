# frozen_string_literal: true

class UserCryptocurrenciesController < ApplicationController
  # before_action :authenticate_request

  def index
    render json: {
      user: @current_user.id,
      cryptocurrencies: @current_user.cryptocurrencies
    }.to_json, status: 200
  end

  def create
    @user = User.find(@current_user["id"])
    params["coins"].each do |coin|
      @crypto = Cryptocurrency.find((coin["value"]))
      @user.cryptocurrencies << @crypto unless @user.cryptocurrencies.include?(@crypto)
    end
    render json: {
      user: @current_user.id,
      cryptocurrencies: @current_user.cryptocurrencies
    }.to_json, status: 200
  end


  def destroy
    @user = User.find(@current_user["id"])
    # delete the user's cryptocurrency at that id
    @crypto = Cryptocurrency.find((["id"]))
    @user.cryptocurrencies << @crypto unless @user.cryptocurrencies.include?(@crypto)
    render json: {
      user: @current_user.id,
      cryptocurrencies: @current_user.cryptocurrencies
    }.to_json, status: 200
  end
end
