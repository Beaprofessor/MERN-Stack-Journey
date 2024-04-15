const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls , cryptography , network calls ,
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

// resolve ka connection hai sidha .then() ke saath
// .then() mei ek callback milta hai yaani ki ek function milta hai
promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 3");
    resolve({ username: "Chai", email: "Chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Siera", password: "123" });
    } else {
      reject("ERROR : Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(() => {
    console.log('Hanji Promise is either resolved or rejected');
  })



  const promiseFive = new Promise(function(resolve , reject){
           setTimeout(function(){
            let error = true;
            if (!error) {
                resolve({ username: "Javascript", password: "123" });
              } else {
                reject("ERROR : JAVASCRIPT went wrong");
              }
           },1000)
  })

  async function consumePromiseFive() {
     try{
        const response = await promiseFive
     console.log(response);
     }
     catch (error){
        console.log(error);
     }
  }

  consumePromiseFive()


//   async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(response);
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log('E:' , error)
//     }
//   }
//   getAllUsers()



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})