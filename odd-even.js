// is even fuction

// const number = 4;
// const reminder = number % 2;
// console.log(reminder == 1);

function isEven(number) {
     if(number % 2 == 0){
          return true;
     }
     return false;
}
const myNumber = 1541;
const isMyNumberEven = isEven(myNumber);
console.log('is my number even:', isMyNumberEven);

const yourNumber = 1580;
const isYourNumberEven = isEven(yourNumber);
console.log('is your number even:', isYourNumberEven);

// is odd function
function isOdd (number){
     if (number % 2 != 0){
          return true;
     }
     return false;
}

const number1 = 1541;
const value = isOdd(number1);
console.log('is my number odd:', value);

const number2 = 1580;
const value2 = isOdd(number2);
console.log('is your number odd:', value2);