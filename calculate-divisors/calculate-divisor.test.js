const calculateDivisors = require("./calculate-divisors");

// test to see if returns a number 
// test a number lower than 3
// test   a number (5) that doesnt need no ocunt
// test the maths is working 
//

describe('calculateDivisors',()=>{
    test('to see if returns a number',()=>{
        const input = 0;
        const output =0;
        expect(calculateDivisors(input)).toEqual(output)
    })
    
    test('to see if returns correct number when the input is less than 3',()=>{
        const input = 2;
        const output =0;
        expect(calculateDivisors(input)).toEqual(output)
    })
    test('to see if returns correct number when divisable by 1 number and no count is needed',()=>{
        const input = 5;
        const output =3;
        expect(calculateDivisors(input)).toEqual(output)
    })
    test('to see if returns correct number when divisible by both numbers and a count is needed',()=>{
        const input = 12;
        const output =33;
        expect(calculateDivisors(input)).toEqual(output)
    })
})