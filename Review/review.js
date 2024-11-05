const person = {
  name: "John",
  age: 30,
  city: "New York",
};

let result = "";

for (let prop in person) {
  result += person[prop] + " ";
}

// document.getElementById("item").innerHTML = result;
// document.getElementById("value").innerHTML = JSON.stringify(person);

// Class and constructors
function Person(name, age, school, dept) {
  this.name = name;
  this.age = age;
  this.school = school;
  this.dept = dept;
  this.state = "Enugu";
}

let oge = new Person("Ogechi", 20, "UNN", "English");

let value = "5";
console.log(value.repeat(4));

console.log(oge.name);

let text = "Please visit Microsoft and Microsoft!";
let newtext = text.replace(/microsoft/gi, "Life");
let alltext = text.replaceAll("Microsoft", "Ubaneze");
console.log(newtext);
console.log(alltext);

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let names = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  names += fruit + ": " + amount + "<br>";
}

// document.getElementById("demo").innerHTML = Object.entries(fruits);
console.log(Object.entries(fruits));
let myString = "What level I'm I currently";
console.log(myString.at(-3));
let myArray = ["hello", 30, "mello", 10];
console.log(myArray.at(1));
let newStr = myString.concat("hello", " More ", "helo");

let padStr = myString.padStart(50, "dd");
console.log(padStr);

let text1 = "The rain in SPAIN stays mainly in the plain";

let getter = text1.matchAll(/ain/g);
console.log(Array.from(getter));

let get1 = text1.includes("ain");
console.log(get1);

let x = 0.2 + 0.1;
console.log(x);

let fruity = ["Banana", "Orange", "Apple", "Mango"];

let display = "<ul>";
for (let idx = 0; idx < fruity.length; idx++) {
  display += "<li>" + fruity[idx] + "</li>";
}
display += "<ul>";
console.log(display);

document.getElementById("display").innerHTML = display;
