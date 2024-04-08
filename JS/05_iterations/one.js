// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
     if(element == 5){
        //console.log("5 is the best number");
     }
    // console.log(element);

}

for (let i = 0; i < 10; i++) {
    //console.log(`Outer Loop value : ${i}`);
    for (let j = 0; j < 10; j++){
        // console.log(`Inner Loop value  ${j} and inner loop value ${i} `);
      //console.log(i + '*' + j + '=' + i*j );
    }
    
}

// Array with for loop

let myArray = ["flash" , "batman" , "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// break and continue 

// for (let index = 1; index < 20; index++) {
//     if( index == 5 ){
//         console.log(`detected 5 , haa toh bahar hole na bahi `);
//         break
//     }
//     console.log(`value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if( index == 5 ){
        console.log(`detected 5 , haa toh bahar hole na bahi `);
        continue
        // ab ye idhar 5 ko print ni karega , mtlb ki ek baar print ni karega aur aage wale number se print karne lag jaayega jo ki iss case mei 6 se print karega
    }
    console.log(`value of i is ${index}`);
}