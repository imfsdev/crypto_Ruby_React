class RemoveTimestampsFromCryptocurrencies < ActiveRecord::Migration[5.2]
  def change
    remove_column :cryptocurrencies, :created_at, :string
    remove_column :cryptocurrencies, :updated_at, :string
  end
end
