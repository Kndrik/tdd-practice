export function capitalize(input) {
    return input.toUpperCase();
}

export function reverseString(input) {
    return input.split('').reverse().join('');
}

export const calculator = (() => {
    const add = (x, y) => {
        return x + y;
    }

    const substract = (x, y) => {
        return x - y;
    }

    const divide = (x, y) => {
        return x / y;
    }

    const multiply = (x, y) => {
        return x * y;
    }

    return { add, substract, divide, multiply }
})();

export function caesarCipher(input, factor) {

}

export function analyzeArray(input) {

}