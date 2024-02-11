let score = "33abc";

// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score);

// console.log(typeof valueInNumber)
// console.log( valueInNumber) // ye print karega NaN - Not a number

/* Note :
 conversion: 
 "33" => 33
 "33abc" => NaN
 true => 1 ; false => 0

*/

let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)

// when we convert the
//  numbers into boolean .. 1 => true ; 0 => false ;
// "" => false
// "Lokesh" => true

// Number to String
let someNumber = 33;

let stringNumber = String(someNumber);

// console.log(stringNumber)
// console.log(typeof stringNumber)

// ******** Operations ********

let value = 3;
let negValue = -value;
//  console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1 = "Hello";
let str2 = " Hinaata";
let str3 = str1 + str2;
// console.log(str3);

// Complex Situations
// Iss type ke conversion mei jo pehle hai usske regarding hi sabkuch convert hojaayega agr string hai toh baaki bhi string mei convert or number hai toh number add hokar string ke saath connect hoga.
// console.log("1" + 2); // => 12
// console.log(1 + "2"); // => 12
// console.log("1" + 2 + 2); // => 122
// console.log(1 + 2 + "2"); // => 32

// console.log(((3 + 2) * 4) % 2);

// console.log(true+) // not possible 
console.log(+true) // 1

console.log(+"")  // 0 , not good to do these type of conversion and operations..


let num1 , num2 , num3
num1 = num2 = num3 = 2+2 // not good practice to write code.....READABILITY = 0



let gameCounter = 100
++gameCounter; //Prefix , value pehle increment hogi and fir use hogi 
gameCounter++; //suffix , value pehle use hogi and  baad mei increment hogi 

console.log(gameCounter)


/*
 Assignment -> mdn par jaakar prefix and suffix ke baare mei padhiye 
 */