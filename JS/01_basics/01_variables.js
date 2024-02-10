// Only way to declare constant in javascript
const accountId = 1232455

// and to declare variable we have two ways... 1.let , 2.var

// and we use let cause it knows the purpose of scope...
let accountEmail = "love@google.com"

// we dont use var anymore because in earlier days of javascript there were no use of scope to understand the things..  {example: if one developer have added a variable for name , and the other developer has used it same in scope or other place the value got changed the global one...}due to this issue we are using let only.....
var accountPassword = "1232"

// {
    // scope
// }


// this is also the way of declaring the variable
// but do not use this . bad declaration....
accountCity = "Jaipur"

// if declared the variable without giving the value javascript samjhti hai ye to UNDEFINED hai...ki value defined ni hui hai...
let accountState;


// accountId = 2  // Not allowed

accountEmail = "hc@hc.com"
accountPassword = "214546"
accountCity = "Banglore"

console.log(accountId); // use to print
console.log(accountEmail);

// Table 

console.table([accountId , accountEmail , accountPassword ,accountCity ,accountState]);


/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/