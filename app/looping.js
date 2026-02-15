const userList = [
    {id: 1, name: "john", age: 20, gender: "male", address: "yangon"},
    {id: 2, name: "rose", age: 22, gender: "female", address: "mandalay"},
    {id: 3, name: "koko", age: 18, gender: "male", address: "bago"},
    {id: 4, name: "popo", age: 20, gender: "female", address: "yangon"},
    {id: 5, name: "jake", age: 28, gender: "male", address: "yangon"},
    {id: 6, name: "lily", age: 26, gender: "female", address: "mandalay"},
    {id: 7, name: "mike", age: 24, gender: "male", address: "bago"},
    {id: 8, name: "sara", age: 27, gender: "female", address: "yangon"},
    {id: 9, name: "peter", age: 29, gender: "male", address: "mandalay"},
    {id: 10, name: "lucy", age: 23, gender: "female", address: "bago"}
]
//console.log("users", typeof userList, userList)

for (const user of userList) {
    console.log(user)
    
    const {name, age, gender, address} = user // destructuring
    if (address === "bago") {
        console.log(`Name is ${name}. Age is ${age} and lives in ${address}.`)
    }
}

for (const key in userList) {
    console.log(key)

    let user = userList[key]
    console.log(user)

    const {name, age, gender, address} = user // destructuring
    if (address === "yangon") {
        console.log(`Name is ${name}. Age is ${age} and lives in ${address}.`)
    }
}

for(let i = 0; i < userList.length; i++){
    const user = userList[i]
    //console.log('user', user) // object

    if (user.gender === "female" && user.age >= 25 && user.address === "yangon") {
        console.log(`Ms.${user.name} is ${user.age} years old and is a ${user.gender} who lives in ${user.address}.`)
    }

    //document.write(`<p>${user.name} is ${user.age} years old and is a ${user.gender}, lives in ${user.address}</p>`) // view html
}

let lucy = {id: 10, name: "lucy", age: 23, gender: "female", address: "bago"}
for (const key in lucy){
    console.log(key, lucy[key])
}