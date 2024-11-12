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

let myName2 = `David is an instructor at digital dream Peter`;
console.log(myName2.toUpperCase());

let sep = myName2.split(" ");
console.log(sep);

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index)
