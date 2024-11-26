var intro = "Hello World I";

let email = "";
let passward = "";

// console.log(intro);

// alert(intro);

// document.write(intro);

intro = 1000;

// document.getElementById("second").innerHTML = intro;

let myName = "David XP";
myName = "Gift Onyinye";

const myLikes = "Be very wealthy and healthy";

let ans = 5;
ans++;
ans++;
ans += 5;

// console.log(ans);

let result = 10;
result = result + 70;
result = result + 10;

result = result + 100;
result++;
result = result + 10.2;
// console.log(result);
// console.log(div);

function printer() {
  let firstName = "Davis ";
  let secondName = "Obinna ";
  let surName = "Eneh";
  let add = 10 + 30;

  let id = firstName + secondName + surName + " is a man of integrity";
  let idss = "David " + "Obi" + " Ene";
  console.log(id);
  console.log(idss);
  console.log(add);
}
printer();

function addNum(num1, num2) {
  console.log("dihusdhisu");
  console.log(num1 + num2);
  return num1 + num2;
}
addNum(3, 6);
// console.log(addNum(60, 4));
let sum = 20 + addNum(40, 50);
console.log(sum);

function converting(num) {
  let result = (5 / 9) * (num / 32);
  return result;
}
console.log(converting(100));

let david = {
  first: "David",
  last: "Peter",
  age: 18,
  level: "final Year",
  regular: true,
  otherDetal: { address: "UNN", status: "Unemployed", married: false },
  fullName: function () {
    return this.first + " " + this.last;
  },
};

let emeka = {
  first: "Emeka",
  last: "Ani",
  age: 20,
  level: "3rd Year",
  regular: false,
  otherDetal: { address: "Hill Top", status: "Selfemployed", married: true },
  fullName: function () {
    return this.first + " " + this.last;
  },
};

david.level = "First Year";

console.log(david["regular"]);
console.log(david.level);

console.log(david["age"] + 100);

console.log(david.otherDetal["address"]);
console.log(david.otherDetal.address);
console.log(david.fullName());

console.log(Object.entries(david));

function Student(name, age, level, address, employed) {
  this.name = name;
  this.myAge = age;
  this.myLevel = level;
  this.myAddress = address;
  this.employed = employed;
}

let chinedu = new Student("Chinedu", 18, "2nd year", "Odim", false);
let oluchi = new Student("Oluch", 23, "Final Year", "UNN", false);

console.log(chinedu.name);
console.log(chinedu.myAge);
console.log(Student.name);

// Event handling

// String

let surname = "Peter";

let myName1 = "David is an instructor at digital dream" + " " + surname;

let firstLetter = myName1[12];
console.log(myName1.length);

let myName2 = `David is an, instructor at digital dream Peter`;
console.log(myName2.toUpperCase());

let sep = myName2.split(" ");
console.log(sep[7]);

let text = "WhEre Please locate Where 'locate' occurs! where, WherE";
let index = text.match(/ere/gi);
console.log(index);
if (text.includes("wheressss")) {
  console.log("the string was found");
} else {
  console.log("Not found");
}
let deLength = text.length;
console.log(deLength);

let newStr = "hgbhih bihbifhbgf ihbgijdfibihidh idfgbbhggige uhg9ethugu9e";

let newSlice = newStr.slice(-20, -5);
console.log(newSlice);

// let x = 0.2 + 0.1 + 10;
// console.log(parseFloat(x.toFixed(3)) + 20);

let cars = ["lexus", "Ikemba", "Jagua", "a", "Merc", "Toyota", 100];
console.log(cars[3]);
console.log(cars.length);
console.log(cars[cars.length - 2]);
console.log(cars.at(-1));
console.log(cars);

let shop = [
  "shirts",
  "trousers",
  ["polo", "baggi", "shorts"],
  "Inners",
  "Babbies",
];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i] + " Hello");
}

console.log(shop[2][2]);

let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push("cashew");
fruits.push("cova");
// fruits.pop();
// fruits.pop();

fruits.unshift("Pawpaw");
// fruits.shift();
let arrJoin = fruits.join(" * ");
console.log(arrJoin);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
let myKids = myBoys.concat(myGirls, fruits);
myKids = myKids.join(" ");
console.log(myBoys);

// let result = fruits.copyWithin(2, 1);
console.log(myKids);

fruits = ["Banana", "Orange", "Apple", "Mango"];
let myfruit = fruits.toSpliced(2);

console.log("myFruits ", myfruit);
console.log("Fruits", fruits);
console.log(fruits.indexOf("Orange"));

// fruits.sort();
// fruits.reverse();

let sorted = fruits.toSorted();
console.log(sorted);

const points = [40, 100, 1, 5, 25, 10];
points.sort((x, y) => x - y);
console.log(points.at(-2));
console.log(Math.min.apply(null, points));

cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

cars.sort((a, b) => a - b);
console.log(cars);

// let changed = [];

// points.ma((x, idx, arr) => {
//   changed.push((x += idx));
// });

let changed = points.map((x, idx, arr) => {
  return (x += idx);
});

console.log(changed);
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr);

let points1 = [40, 100, 1, 5, 25, 10];

let lessNum = points1.filter((x) => x > 25);
console.log(lessNum);

let finalResult = points1.reduce((result, value) => result + value);

let bool = points1.some((value) => value > 50);

console.log(bool);

let strings = "ada, obi, nneka, ekene";

let names = Array.from(strings);

const keys = points1.keys();
console.log(keys);

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);
console.log([...q1, "ap", "may"]);

let myDate = new Date();

let myDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let myMonth = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
// let getter = myDate.getDay();
// let month = myDate.getMonth();
// console.log(getter);
// console.log(myDays[getter]);
// console.log(month);
// console.log(myMonth[month]);

let curr = new Date();

console.log(curr);

// let changedDate = curr.setFullYear(2020);
// console.log(new Date(changedDate));

curr.setDate(10);
console.log(curr);

curr.setMinutes(6);

let radius = 20;
let result1 = Math.PI * radius;
console.log(result1);
console.log(Math.round(10.9));

const result2 = Math.random() * 100;
console.log(result2);

let no = "0";
let x = "3";
let z = "5";
let y = "3";

console.log((x / z) * y);

if (x < z) {
  console.log("free ride coding");
  console.log("Straignt forward coding");
  console.log("From top to down coding");
}

if (y > z) {
  console.log("free ride coding");
  console.log("Straignt forward coding");
  console.log("From top to down coding");
} else {
  console.log("Not free ride coding");
  console.log("Not Straignt forward coding");
  console.log("Not From top to down coding");
}

if (y > z) {
  console.log("free ride coding");
  console.log("Straignt forward coding");
  console.log("From top to down coding");
} else if (y == z) {
  console.log("free ride coding111");
  console.log("Straignt forward coding111");
  console.log("From top to down coding111");
} else if (y > z) {
  console.log("free ride coding222");
  console.log("Straignt forward coding22");
  console.log("From top to down coding222");
} else if (y >= z) {
  console.log("free ride coding223");
  console.log("Straignt forward coding223");
  console.log("From top to down coding2223");
} else {
  console.log("free ride coding2224");
  console.log("Straignt forward coding224");
  console.log("From top to down coding2224");
}

let classDate = new Date();
let today = classDate.getDay();
let dayName = "";
console.log(today);
console.log(dayName);

switch (today) {
  case 0: dayName = "Sunday"; break;
  case 1: dayName = "Monday"; break;
  case 2: dayName = "Tuesday"; break;
  case 3: dayName = "Wednesday"; break
  case 4: dayName = "Thurday"; break
  case 5: dayName = "Friday"; break
  case 6: dayName = "Saturday"; break
  default: dayName = "invalid"
}

// if (today == 0) {
//   dayName = "Sunday";
// } else if (today == 1) {
//   dayName = "Monday";
// } else if (today == 2) {
//   dayName = "Tuesday";
// } else if (today == 3) {
//   dayName = "Wednesday";
// } else if (today == 4) {
//   dayName = "Thursday";
// } else if (today == 5) {
//   dayName = "Friday";
// } else if (today == 6) {
//   dayName = "Saturday";
// } else {
//   dayName = "Invalid";
// }

console.log(dayName);

console.log(new Date());

console.log("Contnue other codes");
