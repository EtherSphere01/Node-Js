let sum = 0;
console.log("start");

const a = new Promise((resolve, reject) => {
  f = true;
  if (f) {
    resolve("True");
  } else {
    reject("False");
  }
});

a.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

console.log("end");


// ///////////////////


function first() {
  return new Promise((resolve) => resolve("First"));
}

function second(data) {
  return new Promise((resolve) => resolve(data + " Second"));
}

function third(data) {
  return new Promise((resolve) => resolve(data + " Third"));
}

first()
  .then(second)
  .then(third)
  .then((res) => console.log(res))
  .catch((err) => console.error("Error:", err));

