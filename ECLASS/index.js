let initial = "A";
let student;

let myName = "David Obi";

let names = ["David", "Gift", "Mich", "Peter"];
let group = { first: "David", second: "Gift", third: "Mich", fourth: "Peter" };

let age = 18;
let age2 = 20;

let ans = myName + age + 10;
let ans2 = age + 10 + myName;

// console.log(ans);
// console.log(ans2);
// console.log(age > age2);

// if(){}
if (age < age2) {
  let result = 20 + 30;
  console.log(result + " is gotten because our result is true");
}
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

function paraAddition(a, b) {
  console.log("function 2 starts here");
  let ans = a + b;
  console.log(ans);
  console.log("This function is working well");
  return ans;
}

// addition();
paraAddition(3, 5);
paraAddition(10, 5);
paraAddition(20, 5);
paraAddition(3, 4);

let moreResult = paraAddition(30, 40) + 20;
console.log(moreResult);

console.log("Final");
