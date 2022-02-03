function getFactorial(number){
     let factorial = 1;
     for(let i=1; i<=number; i++){
          factorial = factorial * i;
          console.log(i, factorial);
     }
     return factorial;
}
var getMyFactorial = getFactorial(7);
console.log(getMyFactorial);