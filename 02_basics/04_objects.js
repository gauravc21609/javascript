// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "1245dfhg"
tinderUser.name = "same"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
  email: "something@gmil.com",
  fullname: {
    userfullname: {
      firstname: "gaurav",
      lastName: "chauhan"
    }
  }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
  1: "a", 2: "b"
}

const obj2 = {
  3: "a" , 4:"b" 
}

const obj4 = {
  5: "a" , 6:"b" 
}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2, obj4)
// const obj3 = { ...obj1, ...obj2};
console.log(obj3);

const users =[
  { id : 1,
    email: "gaurav@gmail.com"
  },
  { id : 2,
    email: "ggaurav@gmail.com"
  }
];

// users.[1].email

