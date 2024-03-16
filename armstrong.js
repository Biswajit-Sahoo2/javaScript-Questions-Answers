//Q- Check whether a number is Armstrong or not.

//Armstrong Number- An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

let num = 370;
//Convert the number to string
let strNum = num.toString();
//Find the length of the number
let len = strNum.length;
let sum = 0;
let product = 1;
for (let i = 0; i < len; i++) {
    //At each iteration multiply each letter of number 'len' times
    let product = strNum[i] ** len;
    //Add the product to sum
    sum = sum + product;
}
//If the sum is equal to the number, then it is a Armstrong number or not
if (sum == strNum) {
    console.log(`${num} is a Armstrong number.`);
} else {
    console.log(`${num} is not a Armstrong number.`);
}
