const number = 10;
let isDivisble = false;

let currentTerm = 2;
while(!isDivisble && currentTerm < number) {
    if(number % currentTerm === 0) {
        isDivisble = true;
    }
    currentTerm ++;
}   

let result = (isDivisble) ? "is composite" : "is prime";
console.log(number,result);