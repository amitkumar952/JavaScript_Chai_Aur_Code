const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
      console.log('Async task is complete');
      resolve() // resolve call nhi karoge to => Promise consumed print nhi hoga
    }, 1000)

})

promiseOne.then(function(){
    console.log("Promise consumed");
})




new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){ //provides a callback function that will be executed when the Promise is resolved. 
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Amit", email: "amit1223@gmail.com"})
    },1000)
})


promiseThree.then(function(user){
    console.log(user);


})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
    let error = false
    if(!error){
        resolve({username: "Amit", password: "1234"})
    }else{
        reject('ERROR: Something went wrong')
    }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
     console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JavaScript", password: "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
        }, 1000)
})


//async await => thode wait kerta hai kam hone ka ager ho jata hai to aage bad jata hai berna bahi per error de deta hai

async function consumePromiseFive(){
    try {
        const response =  await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


//fetch

fetch('https://api.github.com/users/hiteshchoudhary').then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

//Note Inportant
//A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

