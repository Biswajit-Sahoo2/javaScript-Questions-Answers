//Q- Find the factorial of a number.

let num = 4;

findFactorial = (num) => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}

console.log(`Factorial of ${num} is ${findFactorial(num)}`);
