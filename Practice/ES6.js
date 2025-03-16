// variable (var, let, const)
// Function (arrow, default parameter, this)
// Loops (for each, for of, while)
// conditional statement (if, else, switch)
// Operators (rest, spread)
// Destructure (object, array)
// Async nature - setTimeout()
// Class & Objects
// Array methods(filter, slice, find, concat, push, join, map)
// array (methods - map, filter, reducer)
// Template literal
// call back function
// Strings & numbers
// promise, async, await
// Modules concepts
// Exports & defaults

// variable (var, let, const)
let a = 10;
var b = 20;
const c = 30;

const fun = () => {
  let a = 50;
  var b = 60;
  const c = 70;
  console.log(a, b, c);
};
fun();
console.log(`the value of a is ${a}, b is ${b} and c is ${c}`);

// Function (arrow, default parameter, this)
const add = (a, b) => {
  return a + b;
};
console.log(add(10, 20));
const add1 = (a, b) => a + b;
console.log(add1(10, 20));

// default parameter
const add2 = (a, b = 10) => a + b;
console.log(add2(10));

// this
const obj = {
  name: "John",
  age: 30,
  fun: function () {
    console.log(this.name);
  },
};
obj.fun();

const obj1 = {
  name: "",
  Constractor(name) {
    this.name = name;
  },
};
obj1.Constractor("Naimur");
console.log(obj1.name);

// Loops (for each, for of, while)
const arr = [1, 2, 3, 4, 5];
console.log(arr.join(" "));
console.log("for loop");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("for of loop");
for (let i of arr) {
  // print the value only
  console.log(i);
}

console.log("for in loop");
for (let i in arr) {
  //print the index only
  console.log(i);
  console.log(arr[i]);
}

console.log("for each loop");

arr.forEach((value, index, arr) => {
  console.log(value);
  //   console.log(index);
  //   console.log(arr);
});

console.log("while loop");
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
console.log("do while loop");
let j = 0;
do {
  console.log(arr[j]);
  j++;
} while (j < arr.length);

// conditional statement (if, else, switch)
const age2 = 20;
if (age2 > 18) {
  console.log("You are adult");
} else {
  console.log("You are not adult");
}

// switch
const day = "Sunday";
switch (day) {
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Today is not Saturday or Sunday");
}

// Operators (rest, spread)
// rest
console.log("rest operator");
// used for unlimited arguments(basically the parameter desnt know how many arguments will be passed)
const add3 = (...args) => {
  console.log(args);
  console.log(args[0]);
  console.log(args.length);
};
add3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// spread
// used for concat two arrays or objects or copy the array or object
console.log("spread operator");
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// Desctructure (object, array)
// destructuring object
console.log("Destructuring object");
const obj2 = {
  name: "John",
  age: 30,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};
const { name, age, address } = obj2;
console.log(name, age, address.city, address.country);

// destructuring array
console.log("Destructuring array");
const arr4 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr4;
// output will be 1, 2, [3, 4, 5]
console.log(first, second, rest);

const [first1, second1, , ...rest1] = arr4;
// output will be 1, 2, [4, 5]
console.log(first1, second1, rest1);

// Async nature - setTimeout()
console.log("Async nature - setTimeout()");
console.log("start");
setTimeout(() => {
  console.log("inside setTimeout");
}, 3000);
console.log("end");
// output will be start, end, inside setTimeout
