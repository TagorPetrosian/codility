const maxProfit = require('./maxProfit');

describe('maxProfit', () => {
    test('should return 5 for prices [7,1,5,3,6,4]', () => {
        expect(maxProfit([7,1,5,3,6,4])).toBe(5);
    });

    test('should return 0 for prices [7,6,4,3,1]', () => {
        expect(maxProfit([7,6,4,3,1])).toBe(0);
    });

    test('should return 0 for empty array', () => {
        expect(maxProfit([])).toBe(0);
    });

    test('should return 0 for single price', () => {
        expect(maxProfit([1])).toBe(0);
    });

    test('should return maximum profit for strictly increasing prices', () => {
        expect(maxProfit([1,2,3,4,5])).toBe(4);
    });

    test('should handle large price differences', () => {
        expect(maxProfit([3,100,1,4])).toBe(97);
    });
}); 