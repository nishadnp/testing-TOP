
export function encodeText(string, key) {
    let encryptedString = [];

    [...string].forEach(char => {
        if (/^[a-zA-Z]$/.test(char)) {

            let base = char === char.toUpperCase() ? 65 : 97;

            let shifted =
                ((char.charCodeAt(0) - base + key) % 26) + base;

            encryptedString.push(String.fromCharCode(shifted));

        } else {
            encryptedString.push(char);
        }
    });

    return encryptedString.join("");
}