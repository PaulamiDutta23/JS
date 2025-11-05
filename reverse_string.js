const realString = "Paulami";
console.log(realString);
let reverseString = "";

let iterator = 1;
let index = realString.length-iterator;
while(iterator <= realString.length) {
    reverseString +=  realString[index];
    iterator++;
    index--;
}

console.log(reverseString);