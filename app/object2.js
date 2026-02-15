let userA = {
    name: "john",
    age: 20,
    address: {
        city: "Yangon",
        country: "Myanmar"
    }
}

// let userB = {...userA} // shallow copy
// let userC = Object.assign({}, userA) // shallow copy
// userB.name = "rose"
// userB.age = 22
// userB.address.city = "Mandalay"
// console.log('userA :>>', userA)
// console.log('userB :>>', userB)

// let userD = JSON.parse(JSON.stringify(userA)) // deep copy
// userD.name = "koko"
// userD.age = 18
// userD.address.city = "Bago"
// console.log('userA :>>', userA)
// console.log('userD :>>', userD)

// let userE = structuredClone(userA) // deep copy
// userE.name = "popo"
// userE.age = 25
// userE.address.city = "Bangkok"
// userE.address.country = "Thailand"
// console.log('userA :>> ', userA);
// console.log('userE :>> ', userE);


// let userB = {name: 'rose', age: 22, phone: '0923456789'}

// let cloneUserAB = Object.assign({}, userA, userB)
// console.log('cloneUserAB :>>', cloneUserAB)

// let cloneAllUser = {...userA, ...userB, gender: 'female'}
// console.log('usercloneAllUser :>>', cloneAllUser)

const userList = [
    {id: 1, name: "john", age: 20, gender: "male", address: "yangon"},
    {id: 2, name: "rose", age: 22, gender: "female", address: "mandalay"},
    {id: 3, name: "koko", age: 18, gender: "male", address: "bago"},
    {id: 4, name: "popo", age: 20, gender: "female", address: "yangon"}
]

// console.log(userList)
// console.log(userList[0])
// console.log(userList[0]['name'])
// console.log(userList[0].name)
// console.log(userList[0].age)
// console.log(userList[0].gender)
// console.log(userList[0].address)

// let stringUser = JSON.stringify(userList) // array to string (plain text) pe store
// console.log(stringUser)

// let parseUser = JSON.parse(stringUser) // string to array
// console.log(parseUser)

localStorage.setItem("userList", JSON.stringify(userList))
let users = localStorage.getItem("userList")
console.log(users) // string

let parseUser = JSON.parse(users)
console.log(parseUser) // array
