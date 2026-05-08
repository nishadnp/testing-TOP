
import { capitalizeString } from "../capitalizeString.js"

test('abc → Abc', () => {
    expect(capitalizeString("abc")).toBe("Abc");
});

