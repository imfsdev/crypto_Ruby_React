# frozen_string_literal: true

class DeleteJwtBlacklist < ActiveRecord::Migration[5.2]
  def change
    drop_table :jwt_blacklist
  end
end

# frozen_string_literal: true
