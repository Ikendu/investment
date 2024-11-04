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

let student1 = "Henry";
let student2 = "Obi";
let student3 = "Ada";
let student4 = "Mercy";
let student5 = "Wealth";

console.log(student5);

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
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.firstName);
console.log(person.height);
console.log(person.fullName());
