let myArray = ["Apple", "batman", "Superman"]
// console.log(myArray.length);
// for(let i =0; i < myArray.length; i++){
//     const element = myArray[i];
//     console.log(element);
// }
// let a = 2;
// for(let i =1; i<=10; i++){
//     // for(let j =1; j<=10; j++){
//     //     console.log(i + "*" + j + "=" + i*j);
//     // }
//     //console.log(a + "*" + i + "=" + a*i);
// }


//break and continue
// for(let i =0; i<=20; i++){
//     if(i == 5){
//         console.log(`Detect 5`);
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }
// for(let i =0; i<=20; i++){
//     if(i == 5){
//         console.log(`Detect 5`);
//         continue;
//     }
//     console.log(`Value of i is ${i}`);
// }




/********** of Loop ***********/

const arr1= [1, 2, 3, 4, 5]

// for (const i of arr) {
//     console.log(i);
    
// }

const greetings  = "Hello world!"
// for (const greet of greetings) {
//     console.log(greet);
    
// }


/********* Maps  ********/
// Maps mein two entries nhi hongi because map uniq value ke liye jane jatein hai

const map = new Map()
map.set('IN' , "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

//console.log(map);
//for of loop ke sath

// for (const key of map) {
//     console.log(key);  // Array type mein print hogi
    
// }

// for (const [key, value] of map) {  // value or key alag print karani ho tab
//     console.log(key, ':- ' + value);
    
// }


// const myObject ={   //TypeError: myObject is not iterable
//     game1: 'NFS',
//     game2 : 'Spiderman'
// }

// for (const [key, value] of myObject) {  //object for of loop se iterate  nhi hoga error so hoga => TypeError: myObject is not iterable
//     console.log(key, ':- ' + value);
    
// }


    //object per loop ka use kerne ke liye for in loop ka use kerte hai because for of loop work nhi ker rha tha

// const myObject ={
//     js: 'javaScript',
//     cpp: 'c++',
//     rb: 'ruby ',
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }


// for in loop implement array

// const arr = [1, 2, 3, 4, 5]

// for (const key in arr) {
//     console.log(arr[key]);
    
// }

// const programming = ["js", "rb", "py", "java", "cpp"]
// for (const key in programming) {
//     console.log(programming[key]);
// }


/****NOTE****For in loop  key value print kerne per index value print ker rha hai*/
/****NOTE****for of loop mein key value print karane per key ke value bhi utha le rha hai */



 /****************** For Each Loop ***************/

 const coding = ["js", "rb", "py", "java", "cpp"]
//  coding.forEach( function( i ) { // for each loop mein function name nhi hai kyoki function call back hai
//     console.log(i);

//  })

//Through Arrow function
// coding.forEach((i) => {
//     console.log(i);
// })

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

//const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

// const newNums = myNums.filter((num) => num > 4)   // filter return ker deta hai value ko
// console.log(newNums);

// const newNums = myNums.filter( (num) => { //ager scope ko open ker rhe ho to return use kerna padega berna ye kuch return nhi karega
//     return num > 4
// })
// console.log(newNums);

//Note => filter ka use kerke value ko search kerke filter ker sakte hai



//const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumbers.map( (num) => num + 10)


//Chaning  => 2, 3 mathode directly used ker sakte ho

// const newNums = myNums
// .map((num) => num*10)
// .map((num) => num +1)
// .filter((num) => num >= 40);
// console.log(newNums);


// Rduce function

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currval){
//     console.log(`accumulator: ${accumulator} and currval: ${currval}`);
//     return accumulator + currval
// }, 0)

// console.log(myTotal);

const shoppingCart =[
    {
        itemName: "js course ",
        price: 2999
    },
    {
        itemName: "java course ",
        price: 3999
    },
    {
        itemName: "py course ",
        price: 4999
    },
    {
        itemName: "c++ course ",
        price: 5999
    }
]


const pricetopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(pricetopay);


