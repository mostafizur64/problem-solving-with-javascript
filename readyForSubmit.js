// First Problem--------
function mindGame(number){
    if(typeof number !=='number'){
        return 'Please valid input !';
    }
const multiple = (number * 3);
const addition = (multiple +10);
const division = (addition / 2);
const finalResult = (division - 5);
return finalResult;

}

/**
 * Description-------
 * first take function mindGame() and set parameter like number(50) then 
Multiply that number by 3, then add 10, then divide by 2, then subtract 5,
then return finalResults.
And showing error massage for provide valid data.
 */


// Second Problem-------
function evenOdd(str){
    if(typeof str !== 'string'){
       return 'Please Valid Input !';
    }
    let text = str.length;
  if(text % 2 === 0 ){
     return 'even';
  }
  else{
     return 'odd';
  }
 }

 /**
  * Description
  * take function evenOdd() and set parameter only string like('name') then count the character and check the character is(length %2 === 0) then return 'even' or other hand return 'odd'.
  * 
  * And showing error massage for provide valid data.
  */


// Third Problem-------
function isLGSeven(input){
    if(typeof input !== 'number'){
        return 'Please valid input!';
    } 
    let result = (input - 7);
    if(result < 7 ){
        return result;
    }
    else{
        let inputValuedDouble= (input*2);
        return inputValuedDouble;
    }
    
}
 /**
 * Description
 * take function isLGSeven() and set parameter only number.First find the difference between the input value and 7 and check subtract results is less then 7 return the subtract result or subtract result is greater than 7 then return the input value double.
 * And showing error massage for provide valid data.
 */

// Forth Problem-------
function findingBadData(array){
    if(Array.isArray(array)!==true){
        return 'Please Provide array !';
    }
    let badData = 0;
    for(let i=0 ; i<array.length; i++){
        let elements = array[i];
        if(elements < 0){
           badData++; 
      } 
    }
    return badData;   
}
/**
 * Description
 * take function findingBadData() and set parameter only array then check negative or bad data and count this negative value then return this result.
 * 
 * And showing error massage for provide valid data.
 */




// fifth Problem-------
function gemsToDiamond(firstFrnGam, secondFrnGam, thirdFrnGam) {
    if (typeof firstFrnGam !== 'number' || typeof secondFrnGam !== 'number' || typeof thirdFrnGam !== 'number') {
       return 'valid data!';
    }
    let first = firstFrnGam * 21;
    let second = secondFrnGam * 32;
    let third = thirdFrnGam * 43;
    let total = first + second + third;
 
    if (total >= 1000 * 2) {
       totalToSubs = (total - 2000);
       return totalToSubs;
    }
    else {
       return total;
    }
 
 }
 /**
  * Description-------
  * first take function gemsToDiamond() and set 3 parameter like number(50,12,5) and declare 3 variable and set there value and multiply input value with declared values.then sum there results and store total variable 
  * then check total result is greater than or equal (1000*2) return (total-2000) or result is less than (1000*2) then return total value;
 
 And showing error massage for provide valid data.
  */