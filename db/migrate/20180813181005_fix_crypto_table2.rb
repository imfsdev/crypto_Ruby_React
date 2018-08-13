# frozen_string_literal: true

class FixCryptoTable2 < ActiveRecord::Migration[5.2]
  def change
    add_column :cryptocurrencies, :user_id, :integer
  end
end
