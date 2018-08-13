# frozen_string_literal: true

class CryptocurrenciesController < ApiController
  def index
    @cryptos = Cryptocurrency.all
    render json: @cryptos.to_json
  end
end
