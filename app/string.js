// let name = "mgmg";
// let job = "software engineer";
// let age = 25;
// let isMarried = true;
// let info = "name is " + name + "age is " + age + "job is " + job;
// console.log("info", info);

// // template string (` backtick)
// let info2 = `name is ${name.toUpperCase()} age is ${age + 1} job is ${job} it's ${isMarried ? "married" : "not married"}`;
// console.log(info2);

// let productName = "Product Name";
// let productDescription = "Product Description";
// let productButton = "Buy Now";

// let card = `<div id="card">
// <h1>${productName}</h1>
// <p>${productDescription}</p>
// <button>${productButton}</button>
// </div>`;
// console.log('card', card);


// let str = " Hello World ";
// console.log("length of str is =>>", str.length)

// let email = " MgMg@gmail.com ";

// email = email.trim().toLowerCase();
// console.log("email", email)

// let password = "123456"; // assign value
// password = "hello123"; // reassign value
// console.log("password", password)

// console.log("before trim email", email.length)
// console.log("after trim email", email.trim().length)


// string is immutable
let email = "MgMg@gmail.com ";
console.log("email first character is =>>", email.charAt(0))
console.log("email first character is =>>", email.charAt(1))
console.log("email[0]", email[0])
console.log(email.replace("gmail", "yahoo"))
console.log(email.repeat(3))
console.log('email.', email.includes("ggmail"))

console.log('email.', email.indexOf("@"))
console.log('email.', email.indexOf("g"))
console.log('email.', email.lastIndexOf("g"))
console.log(email)

let desc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsum earum odit laborum eaque hic quaerat ipsa ratione, distinctio voluptatum expedita porro harum vitae quae commodi at assumenda facilis! Nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam possimus accusamus pariatur dolorem molestiae harum sint praesentium numquam culpa, suscipit veritatis. Illo minima laudantium quos voluptatum impedit qui unde vitae atque distinctio. Unde recusandae similique quae repudiandae dolor expedita animi veniam facilis reiciendis cum, provident ullam quaerat nostrum quis minima! Voluptas aliquam obcaecati rerum iste nulla? Vero, dolore minima inventore, mollitia vel quod magnam temporibus vitae saepe nam illo tenetur possimus nesciunt cum nostrum modi fugiat quasi aperiam, minus blanditiis soluta? Ea, totam maiores magni rem architecto consequuntur quam vitae ab perspiciatis saepe eligendi deserunt perferendis veritatis dicta quia mollitia."
console.log(desc)
console.log(desc.length)

let showDesc = desc.slice(0,100) + "...";
let showDesc2 = desc.substring(0,100) + "...";

let showDesc3 = desc.substr(90,100) + "..."; // from 90 to 90+100
let showDesc4 = desc.slice(90,100) + "..."; // from 90 to 99

console.log("showDesc==>>", showDesc)
console.log("showDesc2==>>", showDesc2)
console.log("showDesc3==>>", showDesc3)
console.log("showDesc4==>>", showDesc4)


let price = 29.34343433
price = price.toFixed(2)
console.log('price', price)

