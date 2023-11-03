let a = 0;
let b = 1;
while (a <= 10000000) {
    console.log(a);
    let RandNum = a + b;
    a = b;
    b = RandNum;
}