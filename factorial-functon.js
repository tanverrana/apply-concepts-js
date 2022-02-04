// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial = factorial * i;

// }
// console.log(factorial);

function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var fact1 = 6;
var firstFactorial = getFactorial(fact1);
console.log("Our First Factorial Number", fact1, "is=", firstFactorial);

var fact2 = 8;
var firstFactorial = getFactorial(fact2);
console.log("Our First Factorial Number", fact2, "is=", firstFactorial);

var fact3 = 10;
var firstFactorial = getFactorial(fact3);
console.log("Our First Factorial Number", fact3, "is=", firstFactorial);
