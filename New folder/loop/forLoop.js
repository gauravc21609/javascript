// for Loop

for(var i= 0; i<=9; i++){
  console.log(i);
}
console.log(`value is ${i}`);  //let will give error if the variable is decalred in the parameter.

let num = 0;
let Sum =  0;

for(num=1; num<=10; num++){
  Sum += num;
}
console.log(Sum);


// break keyword

for(let i= 1; i<=10; i++){
  if(i===5){
    break;
  }
  console.log(i);  //break will stop the loop and jump direct out of the code block
}

// continue keyword

for(let i=1;i<=10;i++){
  if(i===5){
    continue;
  }
  console.log(i);
}
