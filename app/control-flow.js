let a = 100 // number
let b = '100' // string
// triple equals check value and type
if (a === b) {
    console.log("a is equal to b")
}
else {
    console.log("a is not equal to b")
}

if (a === 50 && a === 70 && a===100) {
    console.log("answer is correct")
}
else {
    console.log("answer is wrong")
}

if (a === 50 || a === 70 || a===100) {
    console.log("answer is correct")
}
else {
    console.log("answer is wrong")
}

if (a != 100) {
    console.log("a is not equal to 100")
}
else {
    console.log("a is equal to 100")
}

// ternary operator
a === 100 ? console.log("a is equal to 100") : console.log("a is not equal to 100")

let result = a === 500? "a is equal to 500" : "a is not equal to 500"
console.log(result)

// nullish coalescing operator
let c = null
let d = 10
let result2 = c ?? d
console.log("result2 is", result2)

let dummyPhoto = "Default Photo"
let userPhoto
let profilePhoto = userPhoto ?? dummyPhoto
console.log(profilePhoto)

// if - else if
// let score = prompt("Enter your score", 50)
// const passed = Number(score)
// console.log("Passed", passed)

// if (passed >= 80) {
//     console.log("You passed with distinction") 
// }
// else if (passed >= 60) {
//     console.log("You passed with merit") 
// }
// else if (passed >= 40) {
//     console.log("You passed") 
// }
// else {
//     console.log("You failed") 
// }

// switch (passed) {
//     case 80:
//         console.log("You passed with distinction");
//         break;
//     case 60:
//         console.log("You passed with merit");
//         break;
//     case 40:
//         console.log("You passed");
//         break;
//     default:
//         console.log("You failed");
// }

// switch case
let day = new Date().getDay()
console.log('day', day)

switch(day) {
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    default:
        console.log("Invalid day")
}

switch(0) {
    case 0: // Sunday
    case 6:
        console.log("Weekend")
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday")
        break;
    default:
        console.log("Invalid day")
}

// increment, decrement
let e = 10
e = e + 1
e += 1
let f = e++ // increment after
let g = ++e // increment before
e-- // decrement before
--e // decrement after
console.log('e', e)
console.log('f', f)
console.log('g', g)

// looping
for(let i = 0; i <= 10; i++){
    if (i === 5) continue // skip
    if (i === 8) break // ak akyg ka nay sa pe out ka akyg twy akone ma htoke tot
    console.log('hello', i)
}

const users = ["mg mg", "aung aung", "kyaw kyaw", "su su", "ya ya", "paing paing", "rose"]
console.log("users", users)

let i = 10
// while (i < users.length) {
//     console.log('My name is', users[i])
//     i++
// }

do {
    console.log('Hello')
    console.log('My name is', users[i])
    i++
} while (i < users.length)

// for(let i = 0; i < users.length; i++){
//     if (users[i] === "su su") continue
//     if (users[i] === "ya ya") break
//     console.log('My name is', users[i])
// }