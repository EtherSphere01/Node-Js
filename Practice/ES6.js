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

// Class & Objects
console.log("Class & Objects");
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  fun() {
    console.log(`My name is ${this.name} and age is ${this.age}`);
  }
}
const person = new Person("John", 30);
person.fun();

// Array methods(filter, slice, find, concat, push, join, map)
console.log("Array methods(filter, slice, find, concat, push, join, map)");
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter
console.log("filter");
const filterArr = arr5.filter((value) => value > 5);
console.log(filterArr);
// output will be [6, 7, 8, 9, 10]

// slice
console.log("slice");
const sliceArr = arr5.slice(2, 5);
console.log(sliceArr);
// output will be [3, 4, 5]

// find
console.log("find");
const findArr = arr5.find((value) => value === 5);
console.log(findArr);
// output will be 5. Print the value is available in the array or print undefined if the value is not available

// concat
console.log("concat");
const arr6 = [11, 12, 13, 14, 15];
const concatArr = arr5.concat(arr6);
console.log(concatArr);
// output will be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(arr5);
// output will be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr6);
// output will be [11, 12, 13, 14, 15]

// push
console.log("push");
arr5.push(11);
console.log(arr5);
// output will be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// join
console.log("join");
console.log(arr5.join(" "));
// output will be 1 2 3 4 5 6 7 8 9 10 11

// map
console.log("map");
const mapArr = arr5.map((value) => value * 2);
console.log(mapArr);
// output will be [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]

// array (methods - map, filter, reducer)
console.log("array (methods - map, filter, reducer)");
const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// map
console.log("map");
const mapArr1 = arr7.map((value) => value * 2);
console.log(mapArr1);
// output will be [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// filter
console.log("filter");
const filterArr1 = arr7.filter((value) => value > 5);
console.log(filterArr1);
// output will be [6, 7, 8, 9, 10]

// reducer
console.log("reducer");
const reducerArr = arr7.reduce((acc, value) => acc + value, 0);
// 0 is the initial value of acc
console.log(reducerArr);
// output will be 55

// Template literal
console.log("Template literal");
const name1 = "John";
const age1 = 30;
console.log(`My name is ${name1} and age is ${age1}`);

// call back function
console.log("call back function");
const add4 = (a, b, callback) => {
  callback(a + b);
};
add4(10, 20, (result) => {
  console.log(result);
});

// Strings & numbers
console.log("Strings & numbers");
const str = "Hello World";
console.log(str.length);
// output will be 11
console.log(str.toLowerCase());
// output will be hello world
console.log(str.toUpperCase());
// output will be HELLO WORLD
console.log(str.charAt(0));
// output will be H
console.log(str.indexOf("o"));
// output will be 4
console.log(str.lastIndexOf("o"));
// output will be 7
console.log(str.includes("World"));
// output will be true
console.log(str.startsWith("Hello"));
// output will be true
console.log(str.endsWith("World"));
// output will be true
console.log(str.split(" "));
// output will be ["Hello", "World"]
console.log(str.split(""));
// output will be ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
console.log(str.slice(0, 5));
// output will be Hello
console.log(str.substring(0, 5));
// output will be Hello
console.log(str.substr(0, 5));
// output will be Hello
console.log(str.replace("World", "Bangladesh"));
// output will be Hello Bangladesh
console.log(str.concat(" Bangladesh"));
// output will be Hello World Bangladesh
console.log(str.trim());
// output will be Hello World
// trim() method removes whitespace from both sides of a string
console.log(str.repeat(3));
// output will be Hello WorldHello WorldHello World
console.log(str.padStart(20, "a"));
// output will be aaaaaaaaaHello World
console.log(str.padEnd(20, "a"));
// output will be Hello Worldaaaaaaaaa

const num = 10.123456789;
console.log(num.toFixed(2));
// output will be 10.12
console.log(num.toPrecision(2));
// output will be 10
console.log(num.toString());
// output will be 10.123456789
console.log(num.toString(2));
// output will be 1010.000111000010100100110111100101111000110101001111
console.log(num);
// output will be 10.123456789
console.log(num.toString(8));
// output will be 12.076547624
console.log(parseInt(num));
// output will be 10
console.log(parseFloat(num));
// output will be 10.123456789
console.log(isNaN(num));
// output will be false
console.log(isFinite(num));
// output will be true
console.log(Number.isInteger(num));
// output will be false
console.log(Number.isSafeInteger(num));
// output will be true

// promise, async, await
// console.log("promise, async, await");
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success");
//   }, 3000);
// });

// promise chain; if one promise is resolved then the next promise will be called
// if one promise is rejected then the catch block will be called
// promise
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Second Success");
//       }, 3000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Third Success");
//       }, 3000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// if time is equal to previous time then which one called first will be output first

// async await
// const fun1 = async () => {
//   const result = await promise;
//   console.log(result);
//   const result1 = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Second Success");
//     }, 3000);
//   });
//   console.log(result1);
//   const result2 = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Third Success");
//     }, 3000);
//   });
//   console.log(result2);
// };
// fun1();

function getdata(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data);
      resolve("Success");
    }, 2000);
  });
}

async function getalldatat() {
  await getdata("first");
  await getdata("second");
  await getdata("third");
}
getalldatat();

// Modules concepts
// Exports & defaults
import { plus, minus, multiply, divide } from "./math.js";
// import Modules from "./math.js";
console.log(plus(200, 200));
// console.log(sub(20, 10));

// import * as math from "./math.js";
// console.log(math.plus(10, 20));
// console.log(math.minus(20, 10));

// import add5 from "./math.js";
// console.log(add5(10, 20));

// const plus = (a, b) => a + b;
// const minus = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;
// export { plus, minus, multiply, divide };

// var Modules = {
//   plus,
//   minus,
//   multiply,
//   divide,
// };
// export default Modules;

// promise stage - 3 types;
// 1-> panding
// 2-> resolve/fulfilled
// 3-> reject
// promise is a object that may produce a single value some time in the future
// either a resolved value or a reason that it's not resolved(rejected)
