// arrays

const myArr = [0, 1, 2, 3, 4]   
const myHeros =  ["shatiman, naagin"]

const myArr2 = new Array(1, 2, 3,4 )


// console.log(myArr[2]);


// ************* array methods   **********

// myArr.push(6)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(7)


// console.log(myArr.length);

const cars = [
  "Valvo", "BMW"
]

// console.log(cars)
// console.log(cars[0]);

// cars.push("add")
// cars.pop()
// cars.unshift(9)
// cars.shift(9)

// console.log(cars.includes(9));
// console.log(cars.indexOf(9));

const newArr = myArr.join()
// console.log(typeof newArr);

//    sclice , splice

// console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
// console.log("C", myArr);
// console.log(myn2);

const girl = [ "apple", "mango", "junkFood"];

// girl.pop();
// console.log(girl);

Array.prototype.myPop = function(){
  if(this.lenth===0){
    return undefined;
  }else{
    const LastIndex = this.length -1;
    const popedElement = this[LastIndex];
    this.length = LastIndex;
    return popedElement;
  }
};

girl.myPop();
console.log(girl);

const range = (start, end) => {
  let result = [...Array (end - start + 1).key()].map((el) => el + 1)
  return result;

};

console.log(range(1, 40));