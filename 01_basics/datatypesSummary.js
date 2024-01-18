// # primitive

//  7 type : Number, String, Boolean, Null, Undefined, Symbol, BigInt;

const score = 100;
const scoreValue = 100.3;

const isLoggedIn =false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 1324465673454662n


// Reference (non-premitive)

// Array, Objects, Functions

const heros = ['saktiman', 'doga'];

let myObj = {
  name:"gaurav",
   age : 23
}

const myFunction = function(){
   console.log("hello world");
}

// console.log(typeof Symbol);


//      stack  (primitive) copy, and heap memory(non-primitive)  refrence..

let myYoutubename = "gaurav.com"

let anotherName = myYoutubename
anotherName = "chaiorcode"

console.log(anotherName);
console.log(myYoutubename);

let userOne = {
   email: "user.@gmail",
   id: "user@ybl"
};

let userTwo = userOne

userTwo.email = "hello@google.com"

console.log(userOne.email);
console.log(userTwo.email);