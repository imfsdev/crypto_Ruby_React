# frozen_string_literal: true

class Cryptocurrency < ApplicationRecord
  belongs_to :user
  validates :name, presence: true, length: { minimum: 1, maximum: 100 }
  validates :symbol, presence: true, length: { minimum: 1, maximum: 20 }
end
