# frozen_string_literal: true

class UserCryptocurrenciesController < ApplicationController
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
    @crypto = @current_user.cryptocurrencies.where("api_id = #{params["id"]}")
    @current_user.cryptocurrencies.delete(@crypto)
    render json: {
      user: @current_user.id,
      cryptocurrencies: @current_user.cryptocurrencies
    }.to_json, status: 200
  end
end
