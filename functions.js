//functions 


function sayMyName(){ 

    console.log("A");
    console.log("M");
    console.log("I");
    console.log("T");

}
//sayMyName()

// function addTwoNumbers(number1, number2){ //jab defination/function banate hai to usme jo value pass ki jati hai usko bolte hai  parameter
//     console.log(number1 + number2);

// }
//addTwoNumbers(3, 4)  // paranthesis ke under value pass kerne ko arguments kahte hai jab function cll kerte hai tab

function addTwoNumbers(number1, number2){ //jab defination/function banate hai to usme jo value pass ki jati hai usko bolte hai  parameter
    // let result = number1 + number2;
    // //console.log("Amit "); // yha value print ho jayegi
    // return result;
    // console.log("Amit "); // return ke bad koi bhi value print nhi hoti hai    


    ///return number1 + number2;
}

const result = addTwoNumbers(5, 3);
//console.log("Result : " + result);

function loginuserMessage(username){
    if(!username){
    //if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in` 
}


 //console.log(loginuserMessage("AMit")); //jab aap koi value definde nhi kerte hai tab aata hai undefined

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "amit",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user); 

handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValues(getArray){
    return getArray[1]
}
console.log(returnSecondValues(myNewArray));
