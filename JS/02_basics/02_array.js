const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]


// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);     


// concat
const all_heros = marvel_heros.concat(dc_heros)    // concat ye dono array ko merge kardega....
// console.log(all_heros);

// spread
const all_new_heros = [...marvel_heros,...dc_heros]  // more better way to add two or more array.
// console.log(all_new_heros);


const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)  // flat use to spread all the values from the array ke elements(array ke array)........
console.log(real_another_array);



console.log(Array.isArray("Lokesh")); // ye puchegea ki lokesh name ka koi element hai kya tere array mei
console.log(Array.from("Lokesh"));  // ye ek array create kardega and saare letters ka array create hojayega.....
console.log(Array.from({name:"Lokesh"}));   // interesting case for interviews // ye ek empty array create kardega..as ye isse convert ni karpaayega...kyuki isse pata ni hai ki keys ka banau ya saari values se array banauuu....


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));  // isse variables ko add kar sakte hai array ke andar...
