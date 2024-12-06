const myName = "David";
let num = 10 % 3;

function addNums(num1, num2) {
  let result = num1 + num2;
  return result;
  //   console.log(num1 + num2);
  //   console.log(num1 * num2);
  //   console.log(num1 ** num2);
}

// myName = "Helen";

// myName = "Ikenna";
console.log(myName);

// addNums();

console.log(num);

num = 100;
num = num ** 2;
// num++;
// num *= 2;

console.log(num);

console.log(9 !== 9);

console.log(addNums(10, 30) + 40);
console.log(addNums(10, 5) / 3);

let newName;
console.log(newName);

let name1 = "50";
let name2 = 20;
let name3 = 10;

let allName = name1 + name2 + name3;
console.log(allName);

let final = addNums(6, 12) + 30;
console.log(final);

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

console.log(toCelsius(40).toFixed(4));

let animal = { part1: "head", part2: "hand", part3: "leg" };

console.log(animal.part1);
console.log(animal.part3);

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 40,
  eyeColor: "brown",
  walking: function () {
    console.log("I walk by stand and taking the innitiatve to move");
    return "take first step";
  },
  fullName: function () {
    return person.firstName + " " + person.lastName;
  },
};

person.state = "Enugu";

console.log(person.walking());
console.log(person.fullName());

let person1 = JSON.stringify(person);

console.log(person.firstName);
