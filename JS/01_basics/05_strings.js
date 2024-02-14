const name = "Lokesh"
const repoCount = 51

// console.log(name + repoCount  + "Value"); // Old version 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // new version and better version to write the code. , more readable syntax ,modern way , string intpolation.


// Declaration of String
const gameName = new String('Lokesh-ls')

console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length) // it will tell u the length of the string
console.log(gameName.toUpperCase()); // convert the letter into uppercase
console.log(gameName.charAt(3)); // use to find the character through the position
console.log(gameName.indexOf('e')); //use to find the position of the character


const newString = gameName.substring(0,4); // Simply isme ek new variable banakar pehle wale ki value ki substring bana rhe hai like 0th position to 3th position (ith number) is printed here ; lokesh-ls -> loke
console.log(newString);

// We can use negative value in slice function of string.

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne = "   Hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20' , '-'))   // ye %20 ko hatadiya


console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))




console.log(gameName.split('-'));





// Do have a look on the mdn for the String.
