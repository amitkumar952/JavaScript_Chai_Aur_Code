const myArr = [0, 1, 2, 3, 4]
const myHeros = ["Amit", "Arjun"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr);



//Array methods

//myArr.push(6) // push function arr mein  add kerne ka kam kerta hai 

//myArr.pop() //pop methode last element ko delete ker deta hai 


//myArr.unshift(9) //arr ke start mein add kerta hai or element aage shift kerta hai

//myArr.shift(); //ye first element ko remove ker de rha hai

// console.log(myArr.includes(9));
//console.log(myArr.indexOf(9));


const newArr = myArr.join()

//console.log(myArr); //Array ki form mein hi print hoga
//console.log( newArr); // value ko string type mein print karega

//console.log(myArr);

//*****************Slice  &&  splice ************************ */


// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3); // 0 se 3 tak hi element print karega last range value ko assign nhi kerta hai
// console.log(myn1);


// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3); // splice methode original array mein se slice range ko nikal deta hai or new array print kerta hai C  [ 0, 4 ] or slice [ 1, 2, 3 ] alga print kerta hai
// console.log("C ", myArr);
// console.log(myn2);



/************************ Array *************** */

const marvel_heros = ["thor", "Ironman", "spiderman"] 
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);



// all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);


const all_new_heros = [...marvel_heros, ...dc_heros] //spraid operator use add/concat the array
//console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7 [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Amit"));
console.log(Array.from("Amit")); // Array ke form mein convert ker dega 

console.log(Array.from({name: "Amit"})); //intersting  output [ 'A', 'm', 'i', 't' ], []



let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Array form mein change ker dega  

