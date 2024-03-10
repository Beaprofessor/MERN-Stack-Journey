// Lets start the objects......

// Objects ko declare karne ke 2 tarike hote hai 
// literal and constructor

// singleton - koi bhi constructor se aap banate hai singleton ek object banta hai
// constructor se banega to hamesha singleton banega
// object.create


// Object literals - isme singleton ni banega
// object declaration -> {} ye hi object hai

const mySym = Symbol("key1")


const JsUser = {
    name: "Lokesh" ,
    "full name" : "Lokesh Sharma",
    [mySym]: "mykey1",    // [] square bracket is used for symbol
    age: 18,
    location: "Jaipur",
    email: "lokesh@meta.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

console.log(JsUser.email)  // bad way to access (but most of the time aese hi access karte hai )
console.log(JsUser["email"]) // best way to access
console.log(JsUser["full name"])  // best way to access
console.log(JsUser[mySym])


JsUser.email = "Lokesh@google.com"
// Object.freeze(JsUser) // isse use karte hai jisse changes na kar paaye 
JsUser.email = "Lokesh@microsoft.com"  // ye change ni hua hai dekh sakte ho aap
// console.log(JsUser) 


JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greeting);  // function execute ni hua hai , only reference diya hai 
console.log(JsUser.greeting()); // function executed
console.log(JsUser.greetingTwo());
