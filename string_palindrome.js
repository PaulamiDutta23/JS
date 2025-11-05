const realString = "ABCA";
let reverseString = "";

let iterator = 1;
let index = realString.length-iterator;
while(iterator <= realString.length) {
    reverseString +=  realString[index];
    iterator++;
    index--;
}

console.log(realString);
console.log(reverseString);

const isPalindrome = realString === reverseString; 
const result = (isPalindrome) ? "is a palindrome string" : "is not a palindrome string";

console.log(realString, result);