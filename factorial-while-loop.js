// find factorial

function getFactorail(number) {
     let factorial = 1;
     let i = 1;
     while (i <= number) {
          factorial = factorial * i ;
          i++ ;
     }
     return factorial;
}
const myFactorial = getFactorial(6) ;
console.log('Factorial of number 6 is: ', myFactorial);

// while loop reverse

function getFactorial(number){
     let factorial = 1;
     let i = number;
     while(i >= 1){
          factorial = factorial * i;
          i-- ;
     }
     return factorial;
}
const myFactorial = getFactorial(6) ;
console.log('Factorial of number 6 is: ', myFactorial);

// for loop reverse

function getFactorial2(number){
     let factorial = 6 ;
     for(let i = number; i >= 1; i--){
          factorial = factorial * i;
     }
     return factorial;
}
const myFactorial = getFactorial2(6) ;
console.log('Factorial of number 6 is: ', myFactorial);