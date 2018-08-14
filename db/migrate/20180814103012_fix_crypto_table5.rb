# frozen_string_literal: true

class FixCryptoTable5 < ActiveRecord::Migration[5.2]
  def change
    drop_table :user_cryptocurrencies
  end
end
