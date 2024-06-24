//const tinderUser = new Object()
const tinderUser ={}
tinderUser.id ="1q344xfx"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "somabhwd@gmail.com",
    fullName:{
        username: {
            firstnmae: "Amit",
            lastname: "Kumar"
        }
    }
}
//console.log(regularUser.fullName.username);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1  obj2}

//const obj3  = Object.assign({},obj1, obj2);

const obj3 = {...obj1, ...obj2} //spraid oprator use kerke
//console.log(obj3);



const users =[
    {
        id: 1,
        email: "AMit@gamil.com"
    },
    {
        id: 1,
        email: "AMit@gamil.com"
    },
    {
        id: 1,
        email: "AMit@gamil.com"
    }
]

users[1].email
//console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "js in hindi ",
    price:  "999",
    courseInstractor:  "Amit"
}

//course.courseInstractor

const {courseInstractor} = course

console.log(courseInstractor);


/*************************** JSON ******************* */

//jitni bhi APIs hai sab JSON formate mein hai 
// {
//     //json syntax
//     //java object notation
// }


// {
//     "name": "amit",
//     "course": "js in hindi",
//     "price" : "free"
// }