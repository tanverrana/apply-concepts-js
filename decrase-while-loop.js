function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;

}
const getMyFactorial = getFactorial(6);
console.log("This is Our decrase Factorial:", getMyFactorial);