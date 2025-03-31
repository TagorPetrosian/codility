const longestCommonSubsequence = require('./longestCommonSubsequence');

describe('longestCommonSubsequence', () => {
    test('should return 3 for "abcde" and "ace"', () => {
        expect(longestCommonSubsequence("abcde", "ace")).toBe(3);
    });

    test('should return 3 for "abc" and "abc"', () => {
        expect(longestCommonSubsequence("abc", "abc")).toBe(3);
    });

    test('should return 0 for "abc" and "def"', () => {
        expect(longestCommonSubsequence("abc", "def")).toBe(0);
    });

    test('should handle empty strings', () => {
        expect(longestCommonSubsequence("", "abc")).toBe(0);
        expect(longestCommonSubsequence("abc", "")).toBe(0);
        expect(longestCommonSubsequence("", "")).toBe(0);
    });

    test('should handle longer sequences', () => {
        expect(longestCommonSubsequence("bsbininm", "jmjkbkjkv")).toBe(1);
    });

    test('should handle repeated characters', () => {
        expect(longestCommonSubsequence("aaa", "aa")).toBe(2);
        expect(longestCommonSubsequence("aaaa", "aa")).toBe(2);
    });

    test('should handle complex cases', () => {
        expect(longestCommonSubsequence("AGGTAB", "GXTXAYB")).toBe(4);
    });
}); 