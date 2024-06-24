//Premitive datatypes => call by value jab tum kisi value ko call karoge
//tab tumhe us value ki copy di jayegi or jo bhi change keoge to uski ki copy mein changes honge

//7 types : String, number, Boolean, null, undefind, Symbol, Bigint
//(symbol => use hota hai kisi value ko uniq banane ke liye)

const score = 100
const scoreVlaue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


//const bigNumber = 236123261n  //last mein n use kerne se ye bigInt number hi ban gya hai



//Reference (Non primitive dataType)
//Arrays, Object, functions

const heros = ["Amit" , "Abhishek", "Ajay"];

//cerly breket  mein object hota  hai

let myObj = {
    name: "Amit",
    age: 22
} 

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction); // function ko call kerne  per as a typeof nikalne per function hi return karega lekin isko object function kahte hai
//output function

//********************Memory ****************************/

//Two types 
//Stack (Primitive) use, Heap(Non-Primitive) use

let myName = "Amit"

let anothername = myName
anothername = "Ajay"
console.log(myName);

console.log(anothername);

let userOne = {
    email : "amit@123",
    upi : "amit@ybl"
} 
let userTwo = userOne
userTwo.email = "ajay@123"
console.log(userOne.email);
console.log(userTwo.email);



