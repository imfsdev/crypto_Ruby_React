# frozen_string_literal: true

class UserCryptocurrency < ApplicationRecord
  belongs_to :user
  belongs_to :cryptocurrency
end
