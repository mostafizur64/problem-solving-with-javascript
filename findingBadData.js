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
const arrays= [ -4, -9, -5, -33, -55 ];
 
console.log(findingBadData(arrays));

/**
 * Description
 * take function findingBadData() and set parameter only array then check negative or bad data and count this negative value then return this result.
 * 
 * And showing error massage for provide valid data.
 */



