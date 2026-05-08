
import { encodeText } from "../caesarCipher.js"

test('Hello, WxYz! → Mjqqt, BcDe! (Cipherkey 5', () => {
    expect(encodeText("Hello, WxYz!", 5)).toBe("Mjqqt, BcDe!");
});

