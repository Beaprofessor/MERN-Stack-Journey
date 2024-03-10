// const tinderUser = new Object ()  // -->> Singleton Object
const tinderUser = {}; // non singleton object

tinderUser.id = "123abcd";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Lokesh",
      lastname: "Sharma",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};

const obj4 = {
  5: "a",
  6: "b",
};

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1 ,obj2,obj4)   //{target} , source

const obj3 = { ...obj1, ...obj2, ...obj4 }; // easy and simple to use to combine objects
console.log(obj3);

const users = [
    {
       id: 1,
       email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
     },
     {
        id: 1,
        email: "h@gmail.com"
     },{
        id: 1,
        email: "h@gmail.com"
     },
     {
        id: 1,
        email: "h@gmail.com"
     }
];

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));   // method to find the property 


