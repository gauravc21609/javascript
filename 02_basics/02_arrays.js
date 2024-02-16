const marvelHeros = [ "thor", " Ironman", "spiderman"]

const dcHeros =  ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros[3][1]);
// 
      
      //  ************ create a new variable and store a and push new array.
const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);


    //......  spread operator
const all_new_heros = [...marvelHeros, ...dcHeros]

// console.log(all_new_heros);

const anotherArray = [ 1, 2, 3, [ 4, 5, 6], 7, [6, 7, [4, 5]]]

const realanotherArry = anotherArray.flat(Infinity)

console.log(realanotherArry);

console.log(Array.isArray("Gaurav"))
console.log(Array.from("Gaurav"))
console.log(Array.from({name: "gaurav"})) // interesting


let score1 = 100
let score2 = 200
let score = 300
console.log(Array.of(score1, score2, score)) 