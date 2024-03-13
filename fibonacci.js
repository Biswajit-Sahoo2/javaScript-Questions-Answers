//Q- Find the fibonacci series of given numbers.

let n = 6;
let a = 0;
let b = 1;

console.log("Fibonacci series :");

console.log(a + "\n" + b);

for (let i = 2; i < n; i++) {
    let fib = a + b;
    a = b;
    b = fib;
    console.log(fib);
}
