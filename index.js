function mindGame(number){
    if(typeof number !=='number'){
        return 'Please valid input !';
    }
const multiple = (number * 3);
const addition = (multiple +10);
const division = (addition / 2);
const substactson = (division - 5);
return substactson;

}
console.log(mindGame(33));