// Premative

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id== anotherId); // false




// Refrence (Non Primitive)

// Array, Object, Functions

const heros = ["kanishk", "akash", "prince"]
let myobj = {
    name: "kanishk",
    age: 20,
}

const myFunction = function(){
    console.log("Hello kanishk")
}

// https://262.ecma-international.org/5.1/#sec-11.4.3