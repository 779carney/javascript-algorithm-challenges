const changeCalculator = require('./change-calculator');

describe('changeCalculator', () => {
    test('if number is 0 returns an empty object', () => {
        const input = 0;
        const output = {}
        expect(changeCalculator(input)).toEqual(output);

    })
    test('if number is 1 returns correct change object', () => {
        const input = 1;
        const output = {'1':1}
        expect(changeCalculator(input)).toEqual(output);

    })
    test('if number is 2 returns correct change object', () => {
        const input = 2;
        const output = {'2':1}
        expect(changeCalculator(input)).toEqual(output);

    })
    test('if number is 7 returns correct change object', () => {
        const input = 7;
        const output = {'5':1,'2':1}
        expect(changeCalculator(input)).toEqual(output);

    })
    test('if number is 7 returns correct change object', () => {
        const input = 7;
        const output = {'5':1,'2':1}
        expect(changeCalculator(input)).toEqual(output);

    })
})