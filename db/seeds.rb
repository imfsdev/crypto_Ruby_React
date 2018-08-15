# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "net/http"
require "json"
url = "https://api.coinmarketcap.com/v2/ticker/"
uri = URI(url)
response = Net::HTTP.get(uri)
r = JSON.parse(response)
# gets the data hash from the response
data = r["data"]
# data is an array with an id and then an hash, so we just need the hash at index 1
# for each item in data we create a cryptocurrency with the name and symbol
data.each do |item|
  Cryptocurrency.create!(
    name: item[1]["name"],
    symbol: item[1]["symbol"]
  )
end
