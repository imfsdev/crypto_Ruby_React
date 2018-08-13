# frozen_string_literal: true

class FixCryptoTable3 < ActiveRecord::Migration[5.2]
  def change
    remove_column :cryptocurrencies, :user_id
    add_column :users, :cryptocurrencies_id, :integer
  end
end
