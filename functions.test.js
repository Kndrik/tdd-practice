import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./functions"; 

// CAPITALIZE TESTS
test('capitalize, all lower', () => {
    expect(capitalize('hello')).toBe('HELLO');
});

test('capitalize, some lower', () => {
    expect(capitalize('CounTry')).toBe('COUNTRY');
});

// reverseString tests
test('reverse string', () => {
    expect(reverseString('hello')).toBe('olleh');
})