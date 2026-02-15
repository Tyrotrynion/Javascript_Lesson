// let names = new Array("bobo", "mgmg", "rose")
// console.log("names :", names)

// let mixed = [
//     "bobo",
//     25,
//     true,
//     null,
//     undefined,
//     "bobo",
//     [1,2,3],
//     new Date(), // object
//     {a:1 , b:2} // object
// ]
// console.log("mixed :", mixed)

// let fruits = ["apple", "banana", "orange"]
// console.log("fruits :", fruits)
// console.log("Length of fruits is", fruits.length)
// console.log("fruits[0] =", fruits[0])
// console.log("fruits[1] =", fruits[1])
// console.log("fruits[2] =", fruits[2])

// const vegetables = new Array("cabbage", "spinach", "carrot") //const po kgg tal. let htet
// console.log("vegetables[0] ==>", vegetables[0])
// vegetables[0] = "broccoli" // modify array element
// vegetables[3] = "potato" // add new array element
// vegetables[40] = "mango" // add new array element
// vegetables[30] = "grapes" // add new array element
// console.log(vegetables)
// console.log("Length of vegetables is", vegetables.length)

const users = []

let newUser1 = "bobo"
users.push(newUser1) // push - nauk ka htae tr
let newUser2 = "mgmg"
users.push(newUser2)
let newUser3 = "rose"
users.push(newUser3)

// let newUser4 = prompt("Enter new user").trim().toLowerCase();
// users.push(newUser4)

users.unshift("admin") // unshift - ashae ka htae tr
users.unshift("super-admin")
users.unshift("owner")

users.pop() // pop - nauk ka phyote tr
users.pop()
users.shift() // shift - ashae ka phyote tr
users.shift()
console.log("users list =>>", users)


const fruits = ["apple", "banana", "orange", "mango", "grape"]
// splice - original array ko phyat
console.log("fruits before splice ==>>", fruits)
fruits.splice(0, 1) // remove 1 element from index 0
fruits.splice(1, 1) // remove 1 element from index 1
fruits.splice(0, 2) // remove 2 element from index 0
console.log("fruits after splice ==>>", fruits)


const vegetables = new Array("cabbage", "spinach", "carrot", "tomato", "potato")
// slice - original array ko ma phyat
console.log("vegetables before slice ==>>", vegetables)
let newVegetables = vegetables.slice(0, 3)
console.log("New Vegetables :>>", newVegetables) 
console.log("vegetables after slice ==>>", vegetables)


// array destructring
const fruits1 = ["apple", "banana", "orange", "mango", "grape"]
console.log(fruits1)

const [apple, banana, ...restFruits] = fruits1;
console.log(apple)
console.log(banana)
console.log(restFruits)

