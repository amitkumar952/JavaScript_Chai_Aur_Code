// Immediatly Invoked Function Expression (IIFE)
// Global  scope ke polution se hui problem or variable ya etc problems  ko hatane ke liye IIFE ka use kiya
// or jo function Immedeatly execute ho jaye unhe bhi IIFE kahte hai

//kisi bhi function mein parenthesis ko add kerne per execution ho jata hai or bad mein () use kerna hota hai

//example
//Named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();

//Arrow function ke through

// (function aurcode() {
//     console.log(`DB IS CONNECTED TWO`);
// })()
// Simple IFEE
(() => {
    console.log(`DB IS CONNECTED TWO`);
})();

((name) => {
    console.log(`DB IS CONNECTED TWO ${name}`);
})('Amit')
