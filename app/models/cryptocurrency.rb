# frozen_string_literal: true

class Cryptocurrency < ApplicationRecord
  has_many :user_cryptocurrencies
  has_many :users, through: :user_cryptocurrencies
  validates :name, presence: true, length: { minimum: 1, maximum: 100 }
  validates :symbol, presence: true, length: { minimum: 1, maximum: 20 }
end
