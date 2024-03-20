// primitive ---> pass by value;
let num1 = 5;
let num2 = num1;
console.log(num1);
console.log(num2);
num1++
console.log(num1);
console.log(num2);

// refrence --> a reference is stored in the memory.
let arr1 = [5];
let arr2 = arr1;
console.log(arr1);
console.log(arr2);
arr2.push(3)
console.log(arr1);
console.log(arr2);