// takes a number as argument 
// get multiples of 3 and 5 below argument 
// add all together 
// return number





// Please do not change the name of this function
function calculateDivisors(num) {
    let count =0;
  
    if (num <3){
     return count;
    }
    else 
     for (let i=0; i < num; i++){
       if (i % 5 ===0|| i % 3 === 0 ){
         count += i;
       }
     }
   
     return count;
  
}


module.exports= calculateDivisors