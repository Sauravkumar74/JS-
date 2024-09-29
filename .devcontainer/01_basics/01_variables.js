const accountID = 14453
let accountemail = "iamsauravkumar74@gmail.com"
var accountpassword = "1234"
accountCity = "Ghaziabad"
//accountID=2 // not allowed
accountemail = "hc@gmail.com"
accountpassword ="232"
accountCity ="Bengaluru"
let accountstate;
console.log(accountID);


/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountID,accountemail,accountpassword,accountCity,accountstate])
