# frozen_string_literal: true

class FixCryptoTable6 < ActiveRecord::Migration[5.2]
  def change
    remove_column :cryptocurrencies, :user_id
  end
end
