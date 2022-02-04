const number = 5;
console.log(number % 2 == 0);

const num = 145;
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
const isMynumberEven = isEven(1642);
console.log(isMynumberEven);

//Odd Number
function oddNumber(number) {
    if (number % 2 == 1) {
        return true
    }
    return false
}
var myNumber = oddNumber(244);
console.log("My Number is odd:", myNumber);