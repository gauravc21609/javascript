// dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.toTimeString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 2, 9)
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("2024-02-09")
// console.log(myCreatedDate.toLocaleString());

let myTimeStap =Date.now()

// console.log(myTimeStap);

// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getYear());

newDate.toLocaleString('default',{
   weekday: "long"
})

const myDOB = new Date()
console.log(myDOB.toDateString());

const d = new Date();
console.log(d.toISOString());
// console.log(d.parse("february 14, 2023"));

console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.toLocaleString());
console.log(d.toJSON());
console.log(d.toLocaleDateString());

