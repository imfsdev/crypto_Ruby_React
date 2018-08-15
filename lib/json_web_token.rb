# frozen_string_literal: true

# lib/json_web_token.rb
class JsonWebToken
  # our secret key to encode our jwt

  class << self
    def encode(payload, exp = 2.hours.from_now)
      # set token expiration time
      payload[:exp] = exp.to_i

      # this encodes the user data(payload) with our secret key
      JWT.encode(payload, ENV["JWT_KEY"])
    end

    def decode(token)
      # decodes the token to get user data (payload)
      # TODO: make this work properly in production
      body = JWT.decode(token, ENV["JWT_KEY"])
      HashWithIndifferentAccess.new body

    # raise custom error to be handled by custom handler
    rescue JWT::ExpiredSignature, JWT::VerificationError => e
      raise ExceptionHandler::ExpiredSignature, e.message
    rescue JWT::DecodeError, JWT::VerificationError => e
      raise ExceptionHandler::DecodeError, e.message
    end
  end
end
