fruits = ["apple", "banana", [1,2,3], "mango", "grape"]
// find methods
const findFruit = fruits.find((fruit) => fruit === "orange");
console.log("findFruit =>", findFruit);

const findFruitIndex = fruits.findIndex((fruit) => fruit === "orange");
console.log("findFruitIndex =>", findFruitIndex);

const hasApple = fruits.includes("apple");
console.log("hasApple =>", hasApple);

const hasAppleIndex = fruits.indexOf("apple");
console.log("hasAppleIndex =>", hasAppleIndex);

const someApple = fruits.some((fruit) => fruit === "apple");
console.log("someApple =>", someApple);
const everyApple = fruits.every((fruit) => fruit === "apple");
console.log("everyApple =>", everyApple);
const fillApple = fruits.fill("apple");
console.log("fillApple =>", fillApple);
const everyApple2 = fillApple.every((fruit) => fruit === "apple");
console.log("everyApple2 =>", everyApple2);

