//  amd or operator

let firstname = "gaurav";
let age = 13;

// if(firstname[0] === "g" && age>= 23){
//   console.log("your name starts from G and age is greater then 23");
// }else{
//   console.log("error")
// }

if(firstname[0] === "G" || age>= 23){
  console.log("your name starts from G and age is greater then 23");
}else{
  console.log("error")
}



// nested if else

let winningNum = 21;

let userGuess = prompt("Guess the Number");
userGuess = Number(userGuess);
console.log(typeof userGuess, userGuess);

if(userGuess === winningNum){
  console.log("your guess right!!");
}else{
  if(userGuess > winningNum){
    console.log("you are too high");
  }else{
    console.log("you are low");
  }
}