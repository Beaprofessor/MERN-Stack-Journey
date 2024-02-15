const score = 342
// console.log(score)

const balance = new Number(400.0012)        // new way to define the number datatype and ye declaration confirm kardegi ki ye variable number datatype hi hai     
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const otherNumber = 1223.8966
// console.log(otherNumber.toPrecision(4));


const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));   // Indian ke acc , laga dega




// +++++++++++++++++ Maths +++++++++++++++++++++++++

// Maths jo library wo javascript mei aati hai by-default.

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9)); 
// console.log(Math.pow(4 ,2)); 
// console.log(Math.min(4 , 0  , 45 , 1)); 
// console.log(Math.max(4 , 0  , 45 , 1));


console.log(Math.random());    // ye random value dega jismye 0 to 1 hi dega. 
console.log((Math.random()*10) + 1);
console.log((Math.floor(Math.random()*10)) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() *  (max-min + 1)) + min ) 


