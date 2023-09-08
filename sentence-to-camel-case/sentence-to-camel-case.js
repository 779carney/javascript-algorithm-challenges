//takes a sentance 
// split into a array 
// chnage the first letter off each word 
// if true first letter is uppercase if false its not 
// joinc together 
function sentenceToCamelCase(sentence, boolean) {
    return sentence.split(' ').map(function (word, index) {
        if (index === 0 && boolean === false) {

            return word.toLowerCase();
         
        }
        if (index === 0 && boolean === true) {
        
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }

        else
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()



    }).join('');


};

module.exports = sentenceToCamelCase;
