
import { analyzeArray } from "../analyzaArray.js"

describe('Returns average, min, max, and length of array', () => {
    test('analyzeArray([1, 8, 3, 4, 2, 6])', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
        });
    });

    test('Works with single number, analyzeArray([10])', () => {
        expect(analyzeArray([10])).toEqual({
            average: 10,
            min: 10,
            max: 10,
            length: 1,
        }); 
    });
});

