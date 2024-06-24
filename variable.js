accountId = 123335
let accountEmail = "Amit@123 "
var accountPass = "12345";
accountCity = "jaipur";
let accountState;

/*
Prefer not be use var
because of issue in block scope ans functional scope
*/
//accountId = 2 // not allowed
console.table([accountId, accountEmail, accountPass, accountCity, accountState]);