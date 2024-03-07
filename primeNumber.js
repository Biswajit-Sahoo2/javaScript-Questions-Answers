//Q- Check whether a number is prime or not.

let num = 20;
let flag = 0;

//If the number is 1, then it is prime
if (num === 1) {
    console.log(`${num} is neither prime nor composite number`);
}

//If the number is 0 or less than 0 give a warning
else if (num < 1) {
    console.log("Enter a positive number");
    return;
}

//If the number is greater than 1, then check whether it is only divided by only 2 numbers or more numbers
else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            //If number is divided by 'i', then increase the flag
            flag++;
        }
    }
}

//If the flag is still 0, then the number is prime else the number is not a prime number
if (flag == 0) {
    console.log(`${num} is prime`);

} else {
    console.log(`${num} is not prime`);
}
