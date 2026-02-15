const fruits = ["apple", "banana", [1,2,3], "mango", "grape"]
const colors = ["red", "green", "blue", "yellow", "purple"]
const mixed = [fruits, colors]
console.log(mixed)
console.log("first array==>>", mixed[0])
console.log("second array==>>", mixed[1])
console.log("first array index-two element ==>>", mixed[0][2][2])
console.log("second array index-one element ==>>", mixed[1][1])

// spread operator(...) ==> copy array
const allData = [...fruits, ...colors, "new item", ...[1,2,3]]
console.log("All data ==>>", allData)

const allData2 = ["new item", [1,2,3], ...fruits, ...colors]
console.log("All data2 ==>>", allData2)

const allData3 = ["new item", ...[1,2,3], ...fruits, ...colors, "last item"]
console.log("All data3 ==>>", allData3)

