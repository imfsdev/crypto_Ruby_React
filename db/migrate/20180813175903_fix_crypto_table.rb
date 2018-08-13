# frozen_string_literal: true

class FixCryptoTable < ActiveRecord::Migration[5.2]
  def change
    add_column :cryptocurrencies, :symbol, :string
  end
end
