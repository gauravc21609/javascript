// singleton
// Object.create

// object literals

const mySym = Symbol("key");

const jsUser = {
  name: "gaurav",
  fullName: "gaurav chauhan",
  age: 23,
  [mySym]: "mykeey1",
  email: "gchauhan@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "saterday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);


jsUser.email = "gaurav@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "gauranfar@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
  console.log("hello gaurav Chauhan");
}

jsUser.greetingtwo = function(){
  console.log(`hello gaurav Chauhan, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());