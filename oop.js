const user = {
  username: "Amit",
  loginCount: 8,
  signedIn: true,

  getuserDetails: function () {
    //console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
  }
}


// console.log(user.username);
// console.log(user.getuserDetails());/

function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn

  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
  }

  return this
}
const userOne = new User("Amit", 12, true)
const userTwo = new User("Arjun", 11, false)
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);
