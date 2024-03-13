//Q- Find the fibonacci series of given numbers.

let n = 6;
let a = 0;
let b = 1;

console.log("Fibonacci series :");
//Print the values a & b
console.log(a + "\n" + b);

for (let i = 2; i < n; i++) {
    //Add the values of a & b
    let fib = a + b;
    a = b;  //Store the value of b in a
    b = fib;  //Store the added value of a & b in b
    console.log(fib);
}
