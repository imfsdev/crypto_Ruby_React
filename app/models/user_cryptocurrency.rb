# frozen_string_literal: true

# join table for user/cryptos many to many
class UserCryptocurrency < ApplicationRecord
  belongs_to :user
  belongs_to :cryptocurrency
end
