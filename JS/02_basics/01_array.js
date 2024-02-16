// Array


const myArr = [0,1,2,3,4,5,6]  // ye hote hai elements , different type ke bhi element ho sakte hai. 
// Javascript ke array resizable hote hai agar ek baar declare kardiya toh aur bhi elements add kar sakte hai.. , mix dataypes are allowed


// console.log(myArr[0]); // way to print the element of array


const myHeros = ["Shaktimaan" , "naagraz"]

const myArr2 = new Array(1,4,5,2,3)
// console.log(myArr2[3]);


// Array Methods

// myArr.push(7) // to add one more value
// myArr.push(8)

// myArr.pop() // to remove one value

// myArr.unshift(9)  // ye starting mei add kardega value ko array mei 
// myArr.shift()   // ye remove kardega starting value ko

// console.log(myArr.includes(8));  // ye question ki form mei hai 
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  // ye array ko convert kardega string mei 

// console.log(myArr);
// console.log(typeof newArr);


// slice , splice 

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)   // but ye original array mei koi change ni karta hai... ye toh bas jo range hai usse print kardeta hai 
console.log(myn1);


console.log("B" , myArr);
const myn2 = myArr.splice(1,3)    // ye jo range de rakhi hai index 1 to 3 , ye ussi ko remove kardega from the original array ... jisse original array mei change hoga...


console.log("C" , myArr);
console.log(myn2);           

