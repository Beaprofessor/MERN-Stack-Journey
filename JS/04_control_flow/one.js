// if
const isUserLoggedIn = true;
const temperature = 41;

// if(temperature < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

// if ( 2 != 3){
//    console.log("executed");
// }

// < , > , <= , >= , == ,=== ,  !=

// if (false){

//     // line no.7 se lekar bracket close tak code execute toh  nai hoga
// }

// "Block Scope"

// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`User power : ${power}`);
// }

// console.log(`User power : ${power}`);

// const balance = 1000;

// // if (balance > 500) console.log("test"), console.log("test2");  // immature tarika hai bhaii ye code likhne ka

// // Yaha tak basics hogya hai if and else ka

// if (balance < 500) {
//           console.log("less then 500");
// } else if (balance < 750) {
//           console.log("less than 750");
// }else if(balance < 900 ){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

//  Ab real time problem ke liye if else apply karke dekhte hai 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if(userLoggedIn && debitCard &&  2==2){
       console.log("Allow to buy the course")
}

// && ->> and ka matlab hai ki saari ki saari condition true honi chahiye

if(loggedInFromGoogle || loggedInFromEmail )
{
    console.log("User Logged in")
}

// ->> || ye hota hai or operator , iske andar koi bhi ek condition bhi true hogi toh bhi execute kardega ye condition ko. 