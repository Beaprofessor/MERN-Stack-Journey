// for of Loop

// ["" , "" , ""] => array ke andar string hai ye 
// [{} , {} , {}] => array ke andar object hai ye

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")


// console.log(map);

for (const [key , value] of map) {
    console.log(key , ':-' ,value);
}


const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key , ":-" , value);
// }

// Objects iterable ni hai for of loop mei aese 