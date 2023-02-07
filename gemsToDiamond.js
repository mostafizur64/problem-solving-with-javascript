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

      return total;
  

}
console.log(gemsToDiamond(100, 5, 1));
/**
 * Description-------
 * first take function gemsToDiamond() and set 3 parameter like number(50,12,5) and declare 3 variable and set there value and multiply input value with declared values.then sum there results and store total variable 
 * then check total result is greater than or equal (1000*2) return (total-2000) or result is less than (1000*2) then return total value;

And showing error massage for provide valid data.
 */