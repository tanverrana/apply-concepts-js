var name = "Tanver";

var bookPrice = 563;

//Array
var partners = ["Tanver", "Rana", "Sobur", "Shakib"];
var elementsCount = partners.length;
var ranaPosition = partners.indexOf("rana");
partners.push("Mash");
partners.pop();

//Conditonals

if (bookPrice < 120) {
    console.log("I will buy this book");
}
else {
    console.log("Please give me discount");
}

//Loop

var i = 0;
while (i <= 17) {
    //do some work
    i++;
}

for (var i = 0; i <= 17; i++) {
    //do some work
}

//Function
function isMoonup() {
    if (time >= 19 && time <= 5) {
        return true
    }
    return false;
}

var mooonStatus = isMoonup(21);

//Let Const
// Value of variable will not change
let price = 27;
price = 29;

//Value of variable not change
const myName = "Tanver";
console.log(myName);
