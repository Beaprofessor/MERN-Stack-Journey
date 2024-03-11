const user = {
  username: "Lokesh",
  price: 899,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  // ye empty object ko refer kar rha hai

// function chai(){
//     let username = "Hitesh"
//     console.log(this);
// }

// chai()

// const chai = function(){
//     let username = "Hitesh"
//      console.log(this.username);

// }

// Arrow function
const chai = () => {
  let username = "Hitesh";
  console.log(this);
};
// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2   // implicit

// const addTwo = (num1 , num2) => (num1 + num2) parenthises ke saath return ki jaruat ni hai lekin curly braces ke sath ki toh jaruat hai

const addTwo = (num1, num2) => ({username: "Sam"})
console.log(addTwo(3, 4));



// const myArray = [2,3,4,5,6,8]
// myArray.forEach()