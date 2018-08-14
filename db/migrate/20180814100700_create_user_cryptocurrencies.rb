# frozen_string_literal: true

class CreateUserCryptocurrencies < ActiveRecord::Migration[5.2]
  def change
    create_table :user_cryptocurrencies do |t|
      t.references :user, foreign_key: true
      t.references :cryptocurrency, foreign_key: true
    end
  end
end
