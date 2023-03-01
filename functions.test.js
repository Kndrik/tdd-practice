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
});

// calculator tests
test('calculator: add', () => {
    expect(calculator.add(10, 5)).toBe(15);
});

test('calculator: substract', () => {
    expect(calculator.substract(10, 5)).toBe(5);
});

test('calculator: divide', () => {
    expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
});

test('calculator: multiply', () => {
    expect(calculator.multiply(3, 7)).toBe(21);
});