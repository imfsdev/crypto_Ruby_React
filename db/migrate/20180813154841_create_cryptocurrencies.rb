# frozen_string_literal: true

class CreateCryptocurrencies < ActiveRecord::Migration[5.2]
  def change
    create_table :cryptocurrencies do |t|
      t.string :ticker
      t.string :name
      t.decimal :last_price

      t.timestamps
    end
  end
end
