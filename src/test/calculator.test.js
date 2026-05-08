
import { arithmaticOperation } from "../calculator.js"

describe('Testing arithmatic operations', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(arithmaticOperation.sum(1, 2)).toBe(3);
    });

    test('subtracts 3 - 5 to equal -2', () => {
        expect(arithmaticOperation.subtract(3, 5)).toBe(-2);
    });

    test('multiplies 8 * 3 to equal 24', () => {
        expect(arithmaticOperation.multiply(8, 3)).toBe(24);
    });

    test('divides 24 / 2 to equal 12', () => {
        expect(arithmaticOperation.divide(24, 2)).toBe(12);
    });
});
