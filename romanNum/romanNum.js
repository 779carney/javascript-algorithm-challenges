// create a function that takes a number and returns the correct roman numeral

function romanNum(num) {
  const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10], // 10
    ["IX", 9],// 1-10 = 9
    ["V", 5], //5
    ["IV", 4], // 1-5 = 4
    ["I", 1] // 1
  ];

  let result = "";

  for (const [roman, value] of romanNumerals) {

    while (num >= value) {
      result += roman;

      num -= value;

    }
  }

  return result;

}


module.exports = { romanNum } 
