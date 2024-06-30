import base64

def encode(text):
    encoded_bytes = base64.b64encode(text.encode('utf-8'))
    return encoded_bytes.decode('utf-8')

def decode(text):
    decoded_bytes = base64.b64decode(text.encode('utf-8'))
    return decoded_bytes.decode('utf-8')

def mask(text, type):
    if type == 'text':
        return f"https://axorax.github.io/urlmskr/?t={encode(text)}"
    else:
        return f"https://axorax.github.io/urlmskr/{encode(text)}"

urlmskr = {
    'encode': encode,
    'decode': decode,
    'mask': mask
}

# Usage examples:
# urlmskr['mask']('urlmskr', 'text')
# urlmskr['mask']('urlmskr', 'other')
