# frozen_string_literal: true

class CryptocurrenciesController < ApiController
  def index
    @cryptos = Cryptocurrency.all
    render json: @cryptos.to_json
  end

  def new
    @crypto = Cryptocurrency.new
  end

  def show
    @crypto = Cryptocurrency.find(params[:id])
    render json: @crypto.to_json
  end
end
