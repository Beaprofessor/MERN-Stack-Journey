// ******Primitive DataTypes*******
//  Ye call by value hote hai , jab bhi inko kahi se kahi copy karte hai toh inka jo original data wo uska reference aapko memory ka nhi diya jata hai   , inko copy karke diya jaata hai and jo changes karte ho wo copy ke andar change hoga..

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

// Javascript Dynamically typed hai....yaha par language ko define ni karte hai....

const score = 100; // number
const scoreValue = 100.3; // number

const isLoggedIn = false; // boolean
const outsideTemp = null; // empty
let userEmail; // value not assigned or (Undefined)

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId); // ye dono same ni hai

const bigNumber = 1223422222222222259279847567n;
console.log(bigNumber);

// ******Non - Primitive Dataypes or Reference Type*******
// Call by reference , ye saari values wo hai  jo memory mei inka reference direct allocate kiya jaa sakta hai

// Array , Objects , Functions

const heros = ["shaktimaan", "naagraj", "doga"];

let myObj = {
  name: "Lokesh",
  age: 22,
};

const myFunction = function(){
    console.log("Hello World");
}



// Primitive datatypes checked...

console.log(typeof score) // number
console.log(typeof scoreValue)  // number
console.log(typeof isLoggedIn) // boolean 
console.log(typeof outsideTemp) // object 
console.log(typeof userEmail) // undefined
console.log(typeof id) // symbol 
console.log(typeof bigNumber) // bigInt



// Non-primitive datatypes check..
console.log(typeof heros)          // object
console.log(typeof myObj)          // object
console.log(typeof myFunction)     // function , detail mei isko object-function bola jaata hai 