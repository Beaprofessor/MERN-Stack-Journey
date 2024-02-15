// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)    // Datatype of Date is - Object

// let myCreatedDate = new Date(2024,0,23) //  Year , month , day .......Month 0 se start hote hai JS mei

// let myCreatedDate = new Date(2024,1,15 ,5 ,3 )
// let myCreatedDate = new Date("2024-01-15") // yyyy-mm-dd
let myCreatedDate = new Date("02-15-2024"); //  mm-dd-yyyy ( in INDIA how we see date)
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))  // for seconds

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getDate());

console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);

console.log(newDate.toLocaleString('default',
 {
  weekday: "long",
  timeZoneName:"short", 
 })
 );

// console.log(newDate.toLocaleDateString());
