// coversion Operations

let score = 30

console.log(typeof score)
console.log(typeof(score))


let marks = "30"
let val = "30abc"
console.log(typeof marks)
console.log(typeof(marks))

// const {score} = req.body

let newmarks = Number(marks)
console.log(typeof newmarks)
console.log(newmarks)

let newval = Number(val)
console.log(typeof newval)
console.log(newval)     //It shows "NaN" => Not a Number. Because 30abc is not a number.

let newnum = String(score)
console.log(typeof newnum)
console.log(newnum)     //It shows "30" as a string.


let n = null

console.log(typeof n)
console.log(n)

let newn = Number(n)

console.log(typeof newn)
console.log(newn)     //It shows 0. This is not good.

let udef = undefined
console.log(typeof udef)
console.log(udef)

let newudef = Number(udef)
console.log(typeof newudef)
console.log(newudef)     //It shows "NaN". This is good.

let b = true
console.log(typeof b)
console.log(b)

let newb = Number(b)
console.log(typeof newb)
console.log(newb)     //It shows 1. This is good.


let bf = false
console.log(typeof bf)
console.log(bf)

let newbf = Number(bf)
console.log(typeof newbf)
console.log(newbf)

let naam = "Deepanshu Jain"
console.log(typeof naam)
console.log(naam)

let newnaam = Number(naam)
console.log(typeof newnaam)
console.log(newnaam)        // It shows "NaN".


// "30" => 30
// "30abc" => NaN
// "true" => 1
// "false" => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)     //It shows true.

let newisLoggedIn = 2

let booleannewIsLoggedIn = Boolean(newisLoggedIn)
console.log(booleannewIsLoggedIn)     //It shows true.


let zeroIsLoggedIn = 0
console.log(zeroIsLoggedIn)
let booleanzeroIsLoggedIn = Boolean(zeroIsLoggedIn)
console.log(booleanzeroIsLoggedIn)

let nameIsLoggedIn = "Deep"
console.log(nameIsLoggedIn)
let booleannameIsLoggedIn = Boolean(nameIsLoggedIn)
console.log(booleannameIsLoggedIn)     //It shows true.

// 1 => true; 0 => false
// "" => false
// "Deepanshu" => true

let someNumber = 3
let someString = String(someNumber)
let someBoolean = Boolean(someNumber)
console.log(typeof someString)
console.log(someString)     //It shows 3.
console.log(someBoolean)
console.log(someBoolean)     //It shows true.


