class AddApiIdToCryptocurrencies < ActiveRecord::Migration[5.2]
  def change
    add_column :cryptocurrencies, :api_id, :integer
  end
end
