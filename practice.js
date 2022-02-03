// 1. leap year
function leapYear(year){
     console.log('Given year:' ,year);
     if(year%4 == 0 & year%100 != 0 || year%400 == 0){
          return true;
     }
          return false;
}
let givenYear = leapYear(2023);
console.log('Year 2023 is leap year :', givenYear);

// 2. even odd
function checkAge(age){
     console.log('Given age:', age);
     if(age%2==0){
          return true;
     }
     return false;
}
var givenAge = checkAge(22);
console.log('Your age is a even number:', givenAge);

// 3. hour to minute

function hourToMinute(time){
     console.log('Given time:', time)
     time = time * 60;
     return time;
}
let givenTime = hourToMinute(7);
console.log('Your time in minutes is:', givenTime, 'minutes');