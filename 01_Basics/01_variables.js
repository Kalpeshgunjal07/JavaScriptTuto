const accountId = 14453
let accountEmail = "Kalpeshgunjal07@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // not allowed
accountEmail= "Kalpesh2@gmail.com"
accountPassword = "123456789"
accountCity = "Mumbai"
console.log(accountId);
/*
prefered not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])