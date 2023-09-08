const sentenceToCamelCase = require('./sentence-to-camel-case');


describe('sentenceToCamelCase', ()=>{
    test(' ', ()=>{
        const input = "this sentence";
        const output = "ThisSentence";
        expect(sentenceToCamelCase(input,true)).toBe(output)
    })
    test(' ', ()=>{
        const input = "this sentence";
        const output = "thisSentence";
        expect(sentenceToCamelCase(input,false)).toBe(output)
    })
    test(' ', ()=>{
        const input = "This Bigger strange Sentence";
        const output = "ThisBiggerStrangeSentence";
        expect(sentenceToCamelCase(input,true)).toBe(output)
    })
    test(' ', ()=>{
        const input = "This Bigger strange Sentence";
        const output = "ThisBiggerStrangeSentence";
        expect(sentenceToCamelCase(input,true)).toBe(output)
    })
})