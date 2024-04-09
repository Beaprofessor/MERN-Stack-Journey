const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc , currval) {
//     console.log(`acc: ${acc} and currval : ${currval}`);
//     return acc + currval
// } , 0)

const myTotal  = myNums.reduce( (acc, curr) => (acc+curr) , 0)

console.log(myTotal);

const shoppingCart = [ 
    {
        itemName  : 'js course',
        itemPrice : 7999,
    },
    {
        itemName  : 'WebDev course',
        itemPrice : 9199,
    },
    {
        itemName  : 'python course',
        itemPrice : 8999,
    },
    {
        itemName  :  'android dev course',
        itemPrice : 20000,
    }
]

const priceToPay = shoppingCart.reduce( (acc,item) => (acc+item.itemPrice),0)

console.log(priceToPay);
