const myObject = {
    js : "Javascript" ,
    cpp : "C++" , 
    rb : "Ruby" ,
    swift :"swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Objects ko iterable karne ke liye for-in loop ka use karte hai 

// Ab chalo array par bhi try karlete hai for-in loop ko

const programming = ["js" , "rb" , "py" , "java" , 'cpp']

for (const key in programming) {
}

// "Important Note"
// for-of loop mei jab array ko print karenge toh wo directly values ko print karega 
// aur agar for-in loop mei array ko print karenge toh wo directly keys ko print karega na ki values ko.


// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('Fr' , "France")

// for (const key in map) {
//    console.log(map);
// }

// map iterable ni hai 


// array par for-of loop lagayenge
// object par for-in loop lagayenge