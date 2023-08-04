
function tillAddition (till) {
  let count =0.00
  if (Object.keys(till).length === 0 ){
    return `£${count.toFixed(2)}`
  }
  for (let key in till){
    if(key.endsWith('p')){
const money=key.slice(0, -1)

count += money * till[key]/100;
    }
    else if (key.startsWith('£')){
      const money=key.slice(1)
      count += money * till[key];
    }
  }
  return `£${count}`
}

module.exports = tillAddition;
