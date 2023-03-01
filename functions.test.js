import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./functions"; 

test('capitalize, all lower', () => {
    expect(capitalize('hello').toBe('HELLO'));
});

test('capitalize, some lower', () => {
    expect(capitalize('CounTry').toBe('COUNTRY'));
});