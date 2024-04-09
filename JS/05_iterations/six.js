// const myCoding = ["js" , "ruby" , "java" , "python" , "cpp"]

// const values = myCoding.forEach( (item) => {
//     //   console.log(item);
//       return item
// })

// console.log(values);   // ye toh undefined de rha hai

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => {
//     return num > 4
//     // filter ke andar curly braces lagaye hai toh return karna padega value kyuki scope start kar diya hai apn logo ne 
// })

const newNums = []

myNums.forEach( (num) => {
    if(num>4){
       newNums.push(num)
    }
})


console.log(newNums);

const books = [
    {
        title: 'Book One' , genre: 'Fiction' , publish: 2004 , edition: 2004 
    },
    {
        title: 'Book Two' , genre: 'Non-Fiction' , publish: 1991 , edition: 2004 
    },
    {
        title: 'Book Three' , genre: 'History' , publish: 1941 , edition: 2004 
    },
    {
        title: 'Book Four' , genre: 'Fiction' , publish: 1981 , edition: 2004 
    },
    {
        title: 'Book Five' , genre: 'Science' , publish: 1990 , edition: 2019 
    },
    {
        title: 'Book Six' , genre: 'History' , publish: 2000, edition: 2004 
    },
    {
        title: 'Book Seven' , genre: 'Comedy' , publish: 1981 , edition: 2004 
    },
    {
        title: 'Book Eight' , genre: 'Fiction' , publish: 2015 , edition: 2023
    },
    {
        title: 'Book Nine' , genre: 'Science' , publish: 1978 , edition: 2014 
    }

];

let  userBooks = books.filter( (bk) => bk.genre==='Science')
 userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre=== "History" )

console.log(userBooks)
