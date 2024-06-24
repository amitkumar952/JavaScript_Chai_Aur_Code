
//without curly brekut ke global scope hota hai

let a = 300



if(true){  //scope { }
    let a= 10
    const b = 20   //block scope {} jitna curly breket ke under hai
    var c = 30
    //console.log("INNER: ", a);
}   



//console.log(a);
//console.log(b);
//console.log(c);


       /************** Nested Scope ***************/

    function one(){
        const username = "Amit"

        function two(){
            const website = "youtube"
            console.log(username);
        }
        //console.log(website); // error print karegi because block ke bad execute ker rhe hai
        //two()


        /************  Closer  ***************/
        //child class parents class ko access ker sakte hai but parents chi
    }
    //one()
    if(true){
        const username = "hitesh"
        if(username == "hitesh"){
            const website = " youtube"
           // console.log(username + website);
        }
       // console.log(website);

    }
   // console.log(username);





   // +++++++++++++++++++++++++++ intersting ++++++++++++++++++++++++

 

   console.log(addone(5));
   function addone(num){
    return num + 1
   }

   

   const addTwo = function(num){
        return num + 2
   }
   addTwo(5)
   
