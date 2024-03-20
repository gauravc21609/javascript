// array destructing

let myarr = ["value1", "value2", "value3", "value4"];

// let myval1 = myarr;
// let myval2 = myarr;
// console.log(myval1[0]);
// console.log(myval2[1]);

let[myval1,myval2, ...myval3] = myarr;
console.log(myval1);
console.log(myval2);
console.log(myval3);