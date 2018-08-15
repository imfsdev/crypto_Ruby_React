# frozen_string_literal: true

class CreateCryptoTable < ActiveRecord::Migration[5.2]
  def change
    create_table :cryptocurrencies do |t|
      t.string :name
      t.string :symbol
    end
  end
end
