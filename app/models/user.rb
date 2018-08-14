# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :user_cryptocurrencies
  has_many :cryptocurrencies, through: :user_cryptocurrencies

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
