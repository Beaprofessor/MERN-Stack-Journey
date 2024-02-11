// console.log(2 > 1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)


// Make sure ki dono datatypes same ho jisse operations shi se ho and predictable conversion result aaye.
// console.log("2" > 1)
// console.log("02" > 1)


console.log(null > 0)
console.log(null == 0)
console.log(null >= 0) // The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number , treating it as 0.
// Thats why (3) null >=0 is true and (1)null > 0 is false.

// == ye alag work karta hai and === ye alag

console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined > 0);  // false



// upar wale jo conversions hai null and undefined wale wo kabhi bhi confusion mei daal sakte hai.....So avoid karo inhe and write CLEAN CODE......


// === (strict check) isme datatype bhi check hota hai 

console.log("2" === 2)