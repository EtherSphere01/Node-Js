let sum = 0;
console.log("start");
function check() {
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      sum += i;
    }
    console.log(sum);
  }, 3000);
}
check();
console.log("end");
