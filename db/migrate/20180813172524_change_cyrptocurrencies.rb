# frozen_string_literal: true

class ChangeCyrptocurrencies < ActiveRecord::Migration[5.2]
  def change
    remove_column :cryptocurrencies, :ticker
    remove_column :cryptocurrencies, :last_price
  end
end
