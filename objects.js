//singleton == constractor se banega to singleton hoga or litral se abnega to nhi hoga

//object constractor
//Object.create ye tarika hai constractor ka

//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Amit",
    "full name": "Amit Kumar",
    //mySym: "mykey1", //abhi yeh symbol ki tarah use nhi ho rha hai or yeh ek string ki taraf difine ho rha hai
    [mySym]: "mykey1", // ab yeh symbol ki tarh use ho eha hai
    age: 18,
    location: "Dehli",
    email: "amitniteion@123.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// // console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);

JsUser.email = "Amitkumarchatgpt.com"
//Object.freeze(JsUser) //email ko lock kerna freeze ke through
JsUser.email ="amitkumar98747189@.com"
//console.log(JsUser);



/************Functions ********************* */

JsUser.greeting = function(){
    console.log("Hello js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

