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

let mystaffdesc = 'Okolo\'s "can u see" we are here';
console.log(mystaffdesc);

let temp = `this is my template's "string" or ${mystaffdesc} characters`;
console.log(temp.length);

num1 = "20.901";
num2 = "40";
num3 = 10.66377567646265765846982628526;

console.log(parseFloat(num1));

let animal = { part1: "head", part2: "hand", part3: "leg" };

console.log(animal["part1"]);
console.log(animal.part3);

let animals = ["Hen", "Goat", "Dog", "Cow"];

// animals[2] = "Lion";
// let minused = animals.pop();
// animals.shift();

console.log(animals.sort());

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);

console.log(points);

let val = 10;

if (val > 11) {
  console.log("It is greater");
} else if (val == 9) {
  console.log("It is eqaul");
} else if (val <= 9) {
  console.log("Is is close enough");
} else if (val >= 100) {
  console.log("It is on the higher side");
} else {
  console.log("At least we have an output");
}

// console.log(new Date().getDay());
// for (let i = 0; i < 10; i++) {
//   if (val == 11) {
//     console.log(Math.floor(Math.random() * 11));
//   }
// }

let today = new Date().getDay();

let showDay = "";

// switch (today) {
//   case 0:
//     showDay = "Sunday";
//     break;
//   case 1:
//     showDay = "Monday";
//     break;
//   case 2:
//     showDay = "Tuesday";
//     break;
//   case 3:
//     showDay = "Wednesday";
//     break;
//   case 4:
//     showDay = "Thursday";
//     break;
//   case 5:
//     showDay = "Friday";
//     break;
//   case 6:
//     showDay = "Saturday";
// }

if (today == 0) {
  showDay = "Sunday";
} else if (today == 1) {
  showDay = "Monday";
} else if (today == 2) {
  showDay = "Tuesday";
} else if (today == 3) {
  showDay = "Wednesday";
} else if (today == 4) {
  showDay = "Thursday";
} else if (today == 5) {
  showDay = "Friday1";
} else if (today == 6) {
  showDay = "Saturday";
}

for (let abc = 0; abc < 10; abc++) {
  let append = "";

  if (abc == 0) append = "st";
  else if (abc == 1) append = "nd";
  else if (abc == 2) append = "rd";
  else append = "th";
  
  console.log(abc + 1 + append, "time I print", showDay);
}
