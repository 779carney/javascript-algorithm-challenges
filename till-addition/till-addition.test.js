const tillAddition = require("./till-addition");

describe('test to see when passed an empty object returns an string', ()=>{
    test('to see if passed an empty object returns a string of £0.00', ()=>{
        const input ={};
        const output= '£0.00'
        expect(tillAddition(input)).toBe(output)
    })
    
    test('to see if passed an object with keys and values does the maths and correctly returns the correct string', ()=>{
        const input ={ "1p": 1, "2p": 1 };
        const output= '£0.03'
        expect(tillAddition(input)).toBe(output)
    })
    test('to see if passed an object with keys and values does the maths and correctly returns the correct string', ()=>{
        const input ={ "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 };
        const output= '£0.38'
        expect(tillAddition(input)).toBe(output)
    })
    test('to see if passed an object with keys and values does the maths and correctly returns the correct string', ()=>{
        const input ={ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 };
        const output= '£1.85'
        expect(tillAddition(input)).toBe(output)
    })
    test('to see if original object has not been mutated', ()=>{
        const input ={ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 };
        tillAddition(input)
        expect(input).toEqual({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 })
    })
})

