// strings Methods

// strings are for storing text
// strings are written with quotes

// ******** methods********

// trim()
// toUpperCase()
// toLowerCase()
// slice

let firstName = "     gaurav      ";
console.log(firstName.length);

// first way

 let newtrimedName = firstName.trim();  //'gaurav'
//  console.log(newtrimedName);
// console.log(newtrimedName.length);

// second way

firstName = firstName.trim();
// console.log(firstName);

firstName = firstName.toUpperCase();
// console.log(firstName);

firstName = firstName.toLowerCase();
// console.log(firstName)

let newString = firstName.slice(0,4)  //start index, end index  

console.log(newString); //go till 4.

let text = "visit microsoft"
let newText = text.replace("microsoft", "w3school")
console.log(newText);