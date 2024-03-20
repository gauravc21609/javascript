//  array clone

let array1 = [1, 2, 3, 4, 5,];
// let array2 =  [1, 2, 3, 4, 5,]; // we have issue in big code.
// let array2 = array1.slice(4);      //clone the array 1 in 2

// let array2 = [].concat(array1);


//spread operator
let array2 = [...array1];

array1.push("6");

console.log(array1 === array2);
console.log(array1);
console.log(array2);


// concat -- > add number of items in array two

let array3 = array1.slice(0).concat(["items2", "items3"]);
console.log(array3);