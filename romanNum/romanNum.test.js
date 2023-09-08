const { romanNum } = require('./romanNum');


describe('romanNum', () => {
    test('when given the number 1 returns the string I', () => {
        const input = 1;
        const output = 'I'
        expect(romanNum(input)).toEqual(output)
    })
    test('when given the number 2 returns the string II', () => {
        const input = 2;
        const output = 'II'
        expect(romanNum(input)).toEqual(output)
    })
    test('when given the number 3 returns the string III', () => {
        const input = 3;
        const output = 'III'
        expect(romanNum(input)).toEqual(output)
    })
    test('when given the number 1 returns the string I', () => {
        const input = 4;
        const output = 'IV'
        expect(romanNum(input)).toEqual(output)
    })
    test('when given the number 5 returns the string V', () => {
        const input = 5;
        const output = 'V'
        expect(romanNum(input)).toEqual(output)
    })
    test('when given the number 6 returns the string VI', () => {
        const input = 6;
        const output = 'VI'
        expect(romanNum(input)).toEqual(output)
    })
    test('when given the number 10 returns the string X', () => {
        const input = 10;
        const output = 'X'
        expect(romanNum(input)).toEqual(output)
    })
    test('when given the number 25 returns the string XXV', () => {
        const input = 25;
        const output = 'XXV'
        expect(romanNum(input)).toEqual(output)
    })
    test('when given the number 10 returns the string X', () => {
        const input = 923;
        const output = 'CMXXIII'
        expect(romanNum(input)).toEqual(output)
    })
    
})
