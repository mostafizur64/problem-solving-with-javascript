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
 console.log(isLGSeven(15))
 /**
 * Description
 * take function isLGSeven() and set parameter only number.First find the difference between the input value and 7 and check subtract results is less then 7 return the subtract result or subtract result is greater than 7 then return the input value double.
 * And showing error massage for provide valid data.
 */