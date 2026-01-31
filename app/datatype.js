// let a = 100;
// let name = "js"
// let price = 100.5;
// let isActive = true
// console.log(a, name, price, isActive)
// let b = boss // error
// console.log('b', b)

// Primitive Data Type
// number, string, boolean, null, undefined, symbol, NaN (Stack memory)

// Non-Primitive Data Type
// object, array, function (Heap memory)

// var res = 100;
// var res = '100';
// var res = true;
// var res = `100`;
// var res = 100.45;
// var res = -100.45;
// var res = Infinity;
// var res = -Infinity;
// // var res = NaN;

// var res = "100" + 100 // 100100
// var res = "100" - 100 // 0
// var res = "100" * 100 // 10000
// var res = "100" / 100 // 1
// var res = "100" % 100 // 0
// console.log('typeof res = ', typeof res, res)
// js use + for concat string -- search string first

// var res2 = "a" * 100;
// console.log('res2', res2) // Not a Number (NaN)

// var res3 = NaN + 1;
// console.log('res3', typeof res3, res3)

// let res4 = + 100 + "100"
// console.log('res4', typeof res4, res4)

// let res5;
// res5 = null
// console.log('res5', typeof res5, res5)

// let name = "mgmg"
// let age = 25
// let info = "name is " + name + " age is " + age
// console.log('info: ', info)

// let a = [];
// let b = []
// console.log('a', typeof a, a)
// console.log('b', typeof b, b)
// let res4 = a == b
// console.log('res4', res4)

// let c = {}
// let d = {}
// console.log('c', typeof c, c)
// console.log('d', typeof d, d)

// let res5 = c == d
// console.log('res5', res5)

// let e = []
// let f = {}
// console.log('e', typeof e, e)
// console.log('f', typeof f, f)
// let res3 = e ==f
// console.log('res3', res3)

// Implicit type coercion (JS ka change tr)
let a = 100 + "100"
console.log('a is', typeof a, a)

// Explicit type conversion
let b = Number("100") + 100
console.log('b is', typeof b, b)
console.log('string to boolean:', typeof Boolean('apple'), Boolean('apple'))
console.log('number string to boolean:', typeof Boolean(200))
console.log('number to string:', typeof String(100));
console.log('string to number:', typeof Number("100"))

// truthy and falsy
// falsy => false, 0, -0, 0n, null, undefined, NaN, ""
// truthy => true, 1, -1, "apple", " ", [], {}  (everything else that is not falsy)

if (2 == "2"){
    console.log('true')
} else{
    console.log('false')
}
