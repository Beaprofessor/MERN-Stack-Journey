// {} // isse hi scope bolte hai

let a = 400;

if (true) {
  let a = 10;
  const b = 20;
//   console.log("INNER:", a);
}

// if ke andar hai block scope and iske bahar hai globle scope

// console.log(a);
// console.log(b);
// console.log(c);




function one(){
    const username = "Lokesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}

// one()


if (true) {
     const username = "Sam"
     if(username == "Sam"){
            const website = " Youtube"
            // console.log(username + website); 
     }   
    //  console.log(website);
}

// console.log(username);


// +++++++++++++++++++++ Interesting +++++++++++++++++++++
console.log(addOne(5))
function addOne(num){
        return num + 1
}

addTwo(5)  // yaha par dikkat aayegi kyuki yaha par function ko dusre tarike se declare kar rakha hai but agar upar wale mei aese karoge toh koi dikkat ni aayegi kyuki waha function ko declare karke kisi variable mei hold ni kar rakha hai jaise idhr kara hai vaise.....
const addTwo = function(num){
    return num + 2
}


