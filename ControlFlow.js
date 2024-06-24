// if( 2 == "2"){
//     console.log("executed");
// }


//scope

// const score =200
// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
//     console.log(`User power: ${power}`);


// const userLoggedIn = true
// const debitcard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if(userLoggedIn && debitcard){
//     console.log("Allow to buy course");
// }
// if (loggedInFromGoogle || loggedInFromEmail){
//     console.log("User Logged In");

// }

/********** Nullish Coalescing Operator (??): null undefined **************/

    //let vall;
    //vall = 5 ?? 10
    //all = null ?? 10
    // vall = undefined ?? 55
    //console.log(vall)

    // Terniary Operator

   // condition ? true : false

   const iceTeaPrice = 100
   iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");



    /******** Truthy Value ***********/

    const userEmail = []

    // if(userEmail){
    //     console.log("Got user email");
    // }
    // else{
    //     console.log("Don't have user email");
    // }

    //falsy value

    //false, 0, -0, BigInt 0n, "", null, undefined, NaN(not a number)

    //truthy values
    //"0", "false", " ", [], {}, (function(){} = empty function)

    // if(userEmail.length === 0){
    //     console.log("Array is empty");

    // }

    // const emptyObj = {}
    // if(Object.keys(emptyObj).length === 0){
    //     console.log("object is Empty");

    // }