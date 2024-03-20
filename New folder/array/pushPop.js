// array push pop

let fruits = ["apple", "mango", "grapes"];

// push --> add in last

fruits.push("banana");
console.log(fruits);

// pop --> delete last index item from the array

let popedFruit = fruits.pop(); //also return the value
console.log(popedFruit);
console.log(fruits);

fruits.unshift("orange");
console.log(fruits);  //add in the first

let shiftedArr = fruits.shift();
console.log(shiftedArr); //deleted and return the value from front. 