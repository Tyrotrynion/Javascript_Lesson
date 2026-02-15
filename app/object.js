// Object works key-value pairs

const object = {
    key1: "value1",
    key2: "value2"
}
console.log(object)
console.log(object.key1)
console.log(object.key2)
console.log(object['key1'])
console.log(object['key2'])

const bobo = {
    name: "bobo",
    age: 25,
    inStudent: true
}
console.log(bobo)
console.log(bobo.name)
console.log(bobo.age)
console.log(bobo.inStudent)
console.log(bobo['name'])
console.log(bobo['age'])
console.log(bobo['inStudent'])

const computer = {
    brand: "Dell",
    model: "XPS 15",
    year: 2024,
}
console.log(computer)
console.log(computer.brand)
console.log(computer.model)
console.log(computer['year'])

let name = "bobo"
let age = 25
let isStudent = true
let phone = "0912345678"
const user = {
    userName: name.toUpperCase(), // modified value
    age, // age: age,
    isStudent,
    phoneNumber: phone,
    startDate: new Date(),
    address: {
        street: "123 Main St",
        zipCode: "12345",
        city: "Yangon",
        state: "Mandalay",
        country: "Myanmar"
    },
    hobbies: ["reading", "coding", "gaming"],
    info: function(){
        console.log('this', this)
        return `Name: ${this.Username}, Age: ${this.age}`;
    }
}
console.log(user)
console.log(user.userName)
console.log(user.age)
console.log(user['isStudent'])
console.log(user.phoneNumber)
console.log(user['startDate'])
console.log(user.address)
console.log(user.address.street)
console.log(user.address['zipCode'])
console.log(user.address.city)
console.log(user.address.state)
console.log(user.address['country'])
console.log(user.hobbies)
console.log(user.hobbies[0])
console.log(user.hobbies[1])
console.log(user.hobbies[2])

user.userName = "rose" // re-assign value
user.age = 22 // re-assign value
user.isMarried = false // add new property
// console.log(user)
console.log(user.info())
console.log('outer this', this) // global object (window)

// object destructuring
console.log("\nObject destructuring")
const {userName, phoneNumber, address, hobbies, isMarried = false} = user
console.log(userName)
console.log(phoneNumber)
console.log(address)
console.log(hobbies)
console.log(isMarried)

let a = 10
let b = a
console.log('b', b)
b = 20
console.log("a :>>", a)
console.log("b :>>", b)

// object is reference type
let userA = {name: "john", age: 20}
let userB = userA // userB is reference to userA
console.log('userA :>>', userA)
console.log('userB :>>', userB)

userB.name = "Rose"
userB.age = 22
console.log('userA :>>', userA)
console.log('userB :>>', userB)

// shallow copy
let userC = Object.assign({}, userA)
userC.name = "popo"
userC.age = 25
console.log('userA :>>', userA)
console.log('userC :>>', userC)

// deep copy
let userD = JSON.parse(JSON.stringify(userA))
userD.name = "popo"
userD.age = 25
console.log('userD :>>', userD)
console.log('userA :>>', userA)


