function inchToFeet(inches){
     var feet = inches / 12;
     return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('My inches in feet is', feet);

// var dadiInches = 144;
// var feet = inchToFeet(dadiInches);
// console.log('Dadi inches in feet is', feet);

// var naniInches = 156;
// var feet = inchToFeet(naniInches);
// console.log('Nani inches in feet is', feet);

// var nanaInches = 168;
// var feet = inchToFeet(nanaInches);
// console.log('Nana inches in feet is', feet);


// mile to km 
function mileToKilometer(miles){
     var km = miles * 1.60934 ;
     return km;
}

var marathon = mileToKilometer(24.87);
console.log('marathon in kilometer', marathon);