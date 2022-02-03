// find factorial for loop
let factorial = 1;
for(let i = 1; i <= 6; i++ ){
     factorial = factorial * i;
}
console.log(factorial);


// find factorial function for loop

function getFactorial(number){
     let factorial = 1;
     for(let i = 1; i <= number; i++ ){
          factorial = factorial * i;
     }
     return factorial;
}
var firstFactorial = getFactorial(7);
console.log('factorial of 7 is ', firstFactorial);

var secondFactorial = getFactorial(9);
console.log('factorial of 9 is ', secondFactorial);

// practice

function checkFactorial(num){
     var fact = 1;
     for(let i = 1; i <= num; i++){
          fact = fact * i;
     }
     return fact;
}

let firstNum = checkFactorial(8);
console.log('Factorial of number 8 is', firstNum);

let secondNum = checkFactorial(9);
console.log('Factorial of number 9 is', secondNum);
