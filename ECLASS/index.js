// let initial = "A";
// let student;

// let myName = "David Obi";

// let names = ["David", "Gift", "Mich", "Peter"];
// let group = { first: "David", second: "Gift", third: "Mich", fourth: "Peter" };

// let age = 18;
// let age2 = 20;

// let ans = myName + age + 10;
// let ans2 = age + 10 + myName;

// // console.log(ans);
// // console.log(ans2);
// // console.log(age > age2);

// // if(){}
// if (age < age2) {
//   let result = 20 + 30;
//   console.log(result + " is gotten because our result is true");
// console.log(names[3]);
// console.log(group.second);
// console.log(group.third);
// console.log(group.fourth);
// console.log(student);

// JavaScript Function

// function addition() {
//   let num1 = 3;
//   let num2 = 2;
//   let ans = num1 + num2;
//   console.log(ans);
// }

function addNums(a, b) {
  console.log("our code starts here");
  let myAns2 = a + b;
  console.log(myAns2);
  console.log("our code ends here");
}

// addNums(10, 400);
// addNums(30, 25);
// addNums(2, 1);
// addNums(40, 100);
// addNums(20, 4);

//Return a value from a function

function multiple(a, b) {
  let result = a * b;
  return result;
}

let myResult = multiple(30, 10);

let final = myResult + 100;
console.log(final);

function converter(a) {
  return (5 / 9) * (a - 32);
}

let converted = converter(100);

console.log(converted);
console.log(converter(300));

// let student1 = "Henry";
// let student2 = "Obi";
// let student3 = "Ada";
// let student4 = "Mercy";
// let student5 = "Wealth";

let allStudent = {
  one: "Henry",
  two: "Obi",
  mid: "Ada",
  four: "Mercy",
  moreSt: { stu1: "Miracle", stu2: "John" },
  last: "Wealth",
};

allStudent.two = 200;
allStudent.student2 = "Peter";
allStudent["mid"] = 25;

console.log(Object.values(allStudent));

let mystudents = Object.values(allStudent);
console.log(mystudents);

console.log(Object.keys(allStudent));

console.log(JSON.stringify(allStudent));

// console.log(allStudent.moreSt.stu2);

let person = {
  firstName: "Henry",
  lastName: "Ani",
  height: 20,
  address: "Digital Dreams",
};
let person2 = {
  firstName: "Peter",
  lastName: "Ani",
  height: 25,
  address: "Digital Dreams",
};
let person3 = {
  firstName: "Okey",
  lastName: "Ike",
  height: 23,
  address: "Digital Dreams",
};
let person4 = {
  firstName: "Emeka",
  lastName: "Igwe",
  height: 23,
  address: "Digital Dreams",
};

// console.log(person.firstName);
// console.log(person.height);
// console.log(person.fullName());
console.log("For loop  started");
for (let x in person) {
  console.log(person[x]);
}

function Person(firstName, lastName, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.address = address;
  this.place = "Nigeria";
}

let student1 = new Person("Emeka", "Obi", 25, "UNN Nsukka, Enugu");
let student2 = new Person("Uche", "Agbo", 18, "Digital Dreams");
let student3 = new Person("Excel", "Akuoma", 24, "Uni Mart Nsk");
let student4 = new Person("Emeka", "Obi", 25, "UNN Nsukka, Enugu");
let student5 = new Person("Uche", "Agbo", 18, "Digital Dreams");
let student6 = new Person("Excel", "Akuoma", 24, "Uni Mart Nsk");

Person.prototype.continent = "Africa";
student2.school = "Esut";

console.log(student1.place);
console.log(student6.continent);
console.log(student2.school);

let text = "Ajhgdoiufhdysiurhsiughdsiughuh";
let padded = text.padEnd(100, "x");

console.log(padded);

let myString = "Uche, Agbo, 18, Digital, Dreams";
myString = myString.split(",");
console.log(myString);
