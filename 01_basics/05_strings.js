const name = "gaurav"
const repoCount = 15;

// console.log(name + repoCount + " Value" );

// console.log(`hello my name is ${name} and my repo count is ${repoCount} `);

// declare

const gameName =  new String('gauravc-gc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringone = "  gaurav   "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://gaurav.com/gaurav%20chodhray"

console.log(url.replace('%20', '-'))
console.log(url.includes('sunder'));

console.log(gameName.split('-'));
