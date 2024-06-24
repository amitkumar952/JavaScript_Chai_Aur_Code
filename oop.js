const user = {
  username: "Amit",
  loginCount: 8,
  signedIn: true,

  getuserDetails: function () {
    console.log("Got user details from database");
  }
}

console.log(user.username);
console.log(user.getuserDetails());
console.log(user.getuserDetails());
console.log(user.getuserDetails());