# frozen_string_literal: true

class User < ApplicationRecord
  has_many :user_cryptocurrencies
  has_many :cryptocurrencies, through: :user_cryptocurrencies
  # Validations
  validates_presence_of :name, :email, :password_digest
  validates :email, uniqueness: true

  # encrypt password
  has_secure_password
end
