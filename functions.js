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

export function getShiftedAlphabet(factor) {
    const alphabet = ('abcdefghijklmnopqrstuvwxyz').split('');
    const offsetAlphabet = new Array(26);
    for (let i = 0; i < alphabet.length; i++) {
        offsetAlphabet[i] = alphabet[mod(i + factor, 26)];
    }
    return offsetAlphabet;
}

export function caesarCipher(input, factor) {
    const alphabet = ('abcdefghijklmnopqrstuvwxyz').split('');
    const shiftedAlphabet = getShiftedAlphabet(factor);

    let crypted = '';
    input.split('').forEach(element => {
        const index = alphabet.indexOf(element);
        crypted += shiftedAlphabet[index];
    });

    return crypted;
}


function mod(n, m) {
    return ((n % m) + m) % m;
  }

export function analyzeArray(input) {
    return {
        average: input.reduce((accumulator, currentVal) => accumulator + currentVal, 0)/input.length,

        min: Math.min(... input),

        max: Math.max(... input),

        length: input.length
    }
}

console.log(caesarCipher('sad', 5));