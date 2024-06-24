//Dates

let myDate = new Date()
// console.log(myDate);   //2024-03-16T11:16:03.386Z
// console.log(myDate.toString());   //Sat Mar 16 2024 16:46:03 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString());  //2024-03-16T11:16:03.386Z
// console.log(myDate.toJSON());    //2024-03-16T11:16:03.386Z
// console.log(myDate.toDateString());  //Sat Mar 16 2024
// console.log(myDate.toLocaleDateString());  //16/3/2024
// console.log(myDate.toLocaleString()); //time date understating easyly  //  16/3/2024, 4:46:03 pm
// console.log(myDate.toUTCString()); //Sat, 16 Mar 2024 11:16:03 GMT
// console.log(myDate.toLocaleTimeString());  //4:46:03 pm

// console.log(myDate.toString());     Sat Mar 16 2024 16:45:14 GMT+0530 (India Standard Time)

// console.log(myDate.toTimeString()); 16:45:14 GMT+0530 (India Standard Time)


//console.log(typeof myDate)  // yeh ek object hai

//jab hame date khud se create kerni hai tab

//let  myCreatedDate = new  Date(2024, 0 , 16); //javaScript mein month 0 se start hote hai

// let  myCreatedDate = new  Date(2024, 0 , 16 , 5, 3);

//let  myCreatedDate = new  Date("2024-08-14"); //dd/mm/yy mein month 1 se start hota hai

// let  myCreatedDate = new  Date("01-14-2024");
// console.log(myCreatedDate.toLocaleString());


let  myCreatedDate = new  Date("01-14-2024");

//*****************Timestemp ************************ */


let myTimeStamp = Date.now()
//console.log(myTimeStamp); //mili second mein output =1710588670315
//console.log(myCreatedDate.getTime()); //mili second mein = 1705170600000

//console.log(Math.floor(Date.now()/1000)); // second mein change

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth()); // 0 se start ho rha islie ye march = 3 ki jageh 2 feb dikha rha hai
console.log(newDate.getMonth() + 1);  // exact month print kerna
// console.log(newDate.getDate());
// console.log(newDate.getTime());

newDate.toLocaleString('default', {
    weekday: "long"
})
