<?php

class urlmskr {
    public static function encode($text) {
        return base64_encode($text);
    }

    public static function decode($text) {
        return base64_decode($text);
    }

    public static function mask($text, $type) {
        if ($type == 'text') {
            return "https://axorax.github.io/urlmskr/?t=" . self::encode($text);
        } else {
            return "https://axorax.github.io/urlmskr/" . self::encode($text);
        }
    }
}

// Usage examples:
// urlmskr::mask('urlmskr', 'text');
// urlmskr::mask('urlmskr', 'other');

?>
