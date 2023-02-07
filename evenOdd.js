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
console.log(evenOdd('chatgpt'));
/**
 * Description
 * take function evenOdd() and set parameter only string like('name') then count the character and check the character is(length %2 === 0) then return 'even' or other hand return 'odd'.
 * 
 * And showing error massage for provide valid data.
 */