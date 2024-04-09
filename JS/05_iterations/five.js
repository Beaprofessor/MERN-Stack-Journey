const coding = ["js" , "rb" , "java" , "python" , "cpp"]

// callback function
// coding.forEach( function (val) {
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item , index , arr ) => {
    console.log(item , index , arr);
} )

// iske paas bas ek hi parameter ni lekar aata hai iske paas aur bhi values hoti hai like index , array list toh ye unko bhi lekar ata hai.


// array ke andar object ko declare kar rhe hai 
const myCoding = [
    {
        languageName : "javascript" , 
        languageFileName: "js"
    },
    {
        languageName : "python" , 
        languageFileName: "py"
    },
    {
        languageName : "Ruby" , 
        languageFileName: "rb"
    }
]

myCoding.forEach( (item) => {
    console.log(`${item.languageName} filename is ${item.languageFileName}`);
})

// yaha par apan ne array ke andar objects ki value nikal di.