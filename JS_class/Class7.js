// Javascript Memory
// Stack and Heap

//Stack (Primitive)
// Heap (Non - Primitive)

let myYouTubename = "VidhyaTechClasses"     // Primitive type
let myAge = 25                              // Primitive type

let anothername = "myYouTubename"
anothername = "Vidhya Classes Bijnor"

console.log(anothername);
console.log(myYouTubename);

let user1 = {
    email: "user@gmail.com",
    upi: "user1@ybl.in"
}

let user2 = user1

user2.email = "user1@google.com"

console.log(user1.email)
console.log(user2.email)

