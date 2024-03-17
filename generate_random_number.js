//Q- Generate random number between two given numbers.

//Math.random() * (end_number-start_number) +start_number

let startNum = 1;
let endNum = 20;
//Generate a random number
let randomNum = Math.random() * (endNum-startNum)+startNum;

//Generate a random Integer
let randomIntNum = Math.floor(Math.random() * (endNum-startNum)+startNum);


console.log(`Random number is ${randomNum}`);
console.log(`Random Integer number is ${randomIntNum}`);