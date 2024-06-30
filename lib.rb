require 'base64'

module Urlmskr
  def self.encode(text)
    Base64.strict_encode64(text)
  end

  def self.decode(text)
    Base64.strict_decode64(text)
  end

  def self.mask(text, type)
    encoded_text = encode(text)
    if type == 'text'
      "https://axorax.github.io/urlmskr/?t=#{encoded_text}"
    else
      "https://axorax.github.io/urlmskr/#{encoded_text}"
    end
  end
end

# Usage examples:
# puts Urlmskr.mask('urlmskr', 'text')
# puts Urlmskr.mask('urlmskr', 'url')
