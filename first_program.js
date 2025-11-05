let binary = "";
const number = 6;
let duplicateNumber = number;
let remainder;

while(duplicateNumber !== 0) {
    binary = binary + (duplicateNumber % 2 == 0) ? "0" : "1";
    remainder = duplicateNumber % 2;
    duplicateNumber = duplicateNumber / 2;
    if(remainder === 1) {
        duplicateNumber = duplicateNumber - 0.5;
    }
}