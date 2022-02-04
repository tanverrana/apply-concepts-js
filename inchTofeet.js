var inches = 132;
var feet = inches / 12;
console.log(feet);

function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}
var naniInches = inchToFeet(156);
console.log("Nani Inches", naniInches);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log("Dadi Inches", feet);

var khalaInches = 168;
var khala = inchToFeet(khalaInches);
console.log("Dadi Inches", khala);

//Mile To Km
function milesToKilometer(miles) {
    var km = miles * 1.62;
    return km;
}
var marathone = milesToKilometer(25);
console.log("Marathone is :", marathone);