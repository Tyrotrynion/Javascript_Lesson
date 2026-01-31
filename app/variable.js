/*
// why need variable
// to store data
// to reuse data
// var, let, const

// == equal to
// === equal value and equal type

// var a;
// a = 10; //assign value
// a = "apple"
// console.log('a is =>', a);

// var a;
// a = 300;
// console.log('second a is =>', a)

// let a = "apple";
// a = 100;
// console.log('a is =>', a)

let b; // declare by mgmg
b = "banana"; // assign value
b = "apple"; // reassign value
b = null; // reassign value
b = undefined; // reassign value
b = 100; // reassign value
console.log('b by mgmg is =>>', b)

// let b = 900; // error
// console.log('b by bobo', b)

// const c; // error
// c = 100
// console.log('c', c)

// const PI = 3.144
// PI = 3.145 // error
// console.log('PI', PI)
*/

var a = 100; // global scope
if(1 == 1){
    //var a = 200; // local declare
    console.log('inside a', a)
}
console.log('outside a is =>', a)

let b = 100; // global declare
if(1 == 1){
    let b = 200; // local declare
    console.log('inside b', b)
}
console.log('outside b is =>', b)

// const c = 100;
// if(true){
//     const c = 200;
//     console.log('inside c', c)
// }
// console.log('outside c is =>', c)