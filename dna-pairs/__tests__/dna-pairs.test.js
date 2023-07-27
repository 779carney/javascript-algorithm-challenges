const dnaPairs = require('../dna-pairs.js');

//test to see if passed emty string return empty array
//test that returns correct dna pair when string.length =1 
// ''      '' when string.length = 2
// ''       '' when string.length = 4



describe('dnaPairs()', () => {
  test('test to see if passed emty string return empty array', () => {
   const input ='';
   const output=[];
   expect(dnaPairs(input)).toEqual(output)
  });
 
});
