console.log("start");

async function sum() {
  let s = 0;
    setTimeout(() => {
         for (i = 0; i < 2000; i++) {
           sum += i;
         }
         return sum;
    }, 2000);
}

async function check() {
  console.log("inside async function");
  let sum = await sum();
  console.log(sum);
  console.log("end");
}
check();
console.log("outside async function");
