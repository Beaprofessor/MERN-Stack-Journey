const userEmail = []

if (userEmail) {
    console.log("Got user Email");
}
else {
    console.log("Dont have user Email");
}

// falsy values 
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN(not a number)


// truthy values 
// true , "0" , 'false' , " " , [] , {} , function(){} -> isko bolte hai empty function

// if (userEmail.length === 0 ) {
//     console.log("Array is empty");
// }

const emptyObject = {}

if (Object.keys(emptyObject).length === 0 ){
       console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 30   // ab isme jo first value milegi wahi assign karedega wo

console.log(val1);


// Terniary Operator

// condition ? true : false 

const iceTeaPrice = 120
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80")