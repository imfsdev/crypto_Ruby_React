# frozen_string_literal: true

class User < ApplicationRecord
  has_many :user_cryptocurrencies
  has_many :cryptocurrencies, through: :user_cryptocurrencies
  # Validations
  validates_presence_of :name, :email, :password_digest
  validates :email, uniqueness: true, length: { maximum: 160, message: "Email must be less than 160 characters" }
  # names can't have spaces
  validates :name, format: { without: /\s/, message: "Username must not contain spaces" },
   length: { maximum: 20, message: "Username must be less than 20 characters" }
  validates :password, length: { minimum: 6, maximum: 120, message: "Password must be 6 and 120 characters" }
  # encrypt password
  has_secure_password
end
