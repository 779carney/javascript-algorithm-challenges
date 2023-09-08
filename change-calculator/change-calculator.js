
function changeCalculator (num) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1]; 
  const change = {};

 coins.forEach(coinValue => {
  if (num >= coinValue){
    const numCoins = Math.floor(num / coinValue);
    change[coinValue] = numCoins;
    num -= numCoins * coinValue;
  }
  });
  return change;
  
};

module.exports = changeCalculator;
