// This keyword hame current keyword ke barein mein batata hai

const user = {
    username: "Amit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this); //this current context ko reffer kerta hai
    }

}

// user.welcomeMessage()
// user.username = "Ajay"
// user.welcomeMessage()/

//console.log(this);

// function chai(){
//     let username = "Amit"
//     console.log(this.username);  //output - undefined because this kabel object mein accses ker pa rha hai function mein nhi
// }

// chai()




// const chai = function (){
//     const chai = () => { //2nd type declaration function with Arrow function
//     let username = "Amit"
//     console.log(this);

// }
// chai()

/************ Arrow Function **************/

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// Implecit return = yha per brecut ko hta dete hai or ek hi line mein likh dete hai
// Expicetly - jab paranthesis use kerte hai
//const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username : "Amit"})

console.log(addTwo(3, 4));