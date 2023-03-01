import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./functions"; 

// CAPITALIZE TESTS
test('capitalize, all lower', () => {
    expect(capitalize('hello').toBe('HELLO'));
});

test('capitalize, some lower', () => {
    expect(capitalize('CounTry').toBe('COUNTRY'));
});

// REVERSESTRING TESTS
test('reverse string', () => {
    expect(capitalize('hello').toBe('olleh'));
});