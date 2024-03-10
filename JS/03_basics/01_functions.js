// Functions - iska matlab jitna code hai usko package mei band kardiya hai and uss package ko jitni baar use karna hai toh uski copy banakar usko le jaa sakte hai..

// keyword , functionName syntax(){}
function sayMyName() {
  console.log("L");
  console.log("o");
  console.log("k");
  console.log("e");
  console.log("s");
  console.log("h");
}

//reference
// sayMyName

//execution
// sayMyName()

// jab functions banate hai tab input lete hai tab unhe bolte hai parameters (number1 and number2 yaha par parameters hai)
// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
//   let result = number1 + number2;
//   return result;

        return number1 + number2;

  //    console.log("Lokesh");  After returning the value koi kaam ni karega function
}

// and jab bhi function ko call karte hai tab jo values dete hai unhe arguement bolte hai jo ki (3 and null ) hai idhr iss case mei
const result = addTwoNumbers(3, 8);
// console.log("result:", result);


function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("Lokesh"))
console.log(loginUserMessage())   // undefined dega ye yaha par
