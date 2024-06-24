const name = "Amit"
const repocount = 50

//console.log(name + repocount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`); //(` `) backticks bolte hai isko string interpulation  


const gameName = new String('Amit- kumar - gangwar');

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 3);
//console.log(newString)

const anotherString = gameName.slice(-6, 3); //slice mein hum negative value bhi de sakte hai
//console.log(anotherString);

const newStringOne = "  Amit      ";
console.log(newString);
console.log(newString.trim());

const url = "https://Amit.com/Amit%20Kumar"

console.log(url.replace('%20', '-')); //output = https://Amit.com/Amit-Kumar

console.log(url.includes('Amit'));

console.log(gameName.split('-'));
