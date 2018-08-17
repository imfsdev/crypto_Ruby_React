# frozen_string_literal: true

class User < ApplicationRecord
  has_many :user_cryptocurrencies
  has_many :cryptocurrencies, through: :user_cryptocurrencies
  # Validations
  validates_presence_of :name, :email, :password_digest
  validates :email, uniqueness: true, length: { maximum: 100 }
  # names can't have spaces
  validates :name, format: { without: /\s/ }, length: { maximum: 20 }
  validates :password, length: { minimum: 6, maximum: 120 }
  # encrypt password
  has_secure_password
end
