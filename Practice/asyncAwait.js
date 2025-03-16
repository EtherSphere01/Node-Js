console.log("start");

async function sum() {
  setTimeout(() => {
    let s = 0;
    for (let i = 0; i < 2000; i++) {
      s += i;
    }
    console.log(s);
  }, 2000);
}

async function a() {
  setTimeout(() => {
    console.log("inside a");
  }, 2000);
}
async function b() {
  setTimeout(() => {
    console.log("inside b");
  }, 2000);
}
async function c() {
  setTimeout(() => {
    console.log("inside c");
  }, 2000);
}

async function check() {
  console.log("inside async function");
  await sum();
  await a();
  await b();
  await c();
  console.log("end");
}
check();
console.log("outside async function");

// ////////////////////////////

function first(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let s = 0;
      for (let i = 0; i <= n; i++) {
        s += i;
      }
      console.log(s);
      resolve(s);
    }, 2000);
  });
}

async function call() {
  console.log("inside call");
  await first(100);
  console.log("after first");
  await first(200);
}
call();

