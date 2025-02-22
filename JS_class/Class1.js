const accountId = 101
var accountName = "Deepanshu"
let accountEmail = "deepanshu@gmail.com"
accountcity = "Bijnor"
let accountState;


// accountId = 102      //not allowed because const keyword only define one time.


console.log(accountId, accountEmail);
console.log(accountName)
console.log(accountcity)

accountEmail = "Deepanshujain@email.com"
console.log(accountEmail)

accountcity = "Jaipur"
console.log(accountcity)


// Table

console.table([accountId, accountName, accountEmail, accountcity, accountState])


// We are not use var. We use let for variables.

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
