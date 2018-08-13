# frozen_string_literal: true

class FixCryptoTable4 < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :cryptocurrencies_id
    add_column :cryptocurrencies, :user_id, :integer
  end
end
