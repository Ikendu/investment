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
console.log(myArray.at(-2));
