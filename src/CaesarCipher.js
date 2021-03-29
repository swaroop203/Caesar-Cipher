import React from "react";

const CaesarCipher = (plainText, shiftValue) => {
        return (
            <p>
                {caesarShift(plainText, parseInt(shiftValue))}
        </p>)
};
export const caesarShift = function (str, shiftValue) {
    // Wrap the shiftValue
    if (shiftValue < 0) {
        return caesarShift(str, shiftValue + 26);
    }

    // Make an output variable
    var output = "";

    // Go through each character
    for (var i = 0; i < str.length; i++) {
        // Get the character we'll be appending
        var c = str[i];

        // If it's a letter...
        if (c.match(/[a-z]/i)) {
            // Get its code
            var code = str.charCodeAt(i);

            // Uppercase letters
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + shiftValue) % 26) + 65);
            }

            // Lowercase letters
            else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + shiftValue) % 26) + 97);
            }
        }

        output += c;
    }
    return output;
};

export default CaesarCipher;
