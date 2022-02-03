// function isLeapYear(myYear) {
//       if (myYear % 4 == 0){
//            return true;
//       }
//       else{
//            return false;
//       }
// }

// const myYear = 2020 ;
// const isMyYearLeapYear = isLeapYear(myYear);
// console.log('Is my year leap year', isMyYearLeapYear);

// const yourYear = 2100 ;
// const isYourYearLeapYear = isLeapYear(yourYear);
// console.log('Is your year leap year', isYourYearLeapYear);

// leap year

function checkLeapYear(year){
     if(year % 4 == 0 && year % 100 != 0 ){
          return true;
     }
     else if(year % 400 == 0 ||  year % 100 != 0){
          return true;
     }
     else {
          return false;
     }
}
const givenYear = 2100 ;
const isLeapYear = checkLeapYear(givenYear)
console.log('Given year is leap year :', isLeapYear);

//

function checkLeapYear(year){
     if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
          return true;
     }
     else {
          return false;
     }
}
const givenYear = 2100 ;
const isLeapYear = checkLeapYear(givenYear)
console.log('Given year is leap year :', isLeapYear);