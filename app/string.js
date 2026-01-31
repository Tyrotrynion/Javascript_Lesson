let name = "mgmg";
let job = "software engineer";
let age = 25;
let isMarried = true;
let info = "name is " + name + "age is " + age + "job is " + job;
console.log("info", info);

// template string (` backtick)
let info2 = `name is ${name.toUpperCase()} age is ${age + 1} job is ${job} it's ${isMarried ? "married" : "not married"}`;
console.log(info2);

let productName = "Product Name";
let productDescription = "Product Description";
let productButton = "Buy Now";

let card = `<div id="card">
<h1>${productName}</h1>
<p>${productDescription}</p>
<button>${productButton}</button>
</div>`;
console.log('card', card);



