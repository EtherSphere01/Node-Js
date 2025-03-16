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
console.log(a, b, c); // 10 20 30