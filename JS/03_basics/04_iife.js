// Immediately Invoked Function Expressions (IIFE)
// Jo function immediately execute hojaye (Ye line ni bolni hai interview mei )
// global scope ke pollution se problem  hoti hai kayi baar to uss global scope ke jo variable hai ya fir jo bhi declaration kara hai usske pollution ko hatane ke liye IIFE use karte hai

(function chai() {
  console.log(`DB CONNECTED`);
})();
// ye named IIFE hai 

// ()-> ye function ke defination ke liye and () ye execution ke liye



// ye unnamed IIFE hai
( (name) => {
    console.log(`DB CONNECTED TWO  ${name}`)
})('Sam')


// jab bhi 1 se jada IIFE likhna ho toh do make sure ki ek ko likhne ke baad usko semicolon (;) se complete karo warna toh aapka code runn ni karega