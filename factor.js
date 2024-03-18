//Q- Find all the factors of a number.

let num = 20;
//Array to store all the factors.
let factors = [];

for (let i = 1; i <= num; i++) {
    if (num%i == 0) {
        //If 'i' is divided by 'num', then 'i' is a factor of 'num'
        factors.push(i);
    }
    
}

console.log(...factors);