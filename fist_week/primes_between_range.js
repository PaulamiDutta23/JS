const endOfRange = 15;
const startOfRange = 2;

console.log("Prime Numbers between",startOfRange,"and",endOfRange,"are :");

for(let number = startOfRange; number <= endOfRange; number++) {
    let isDivisble = false;
    let currentTerm = 2;
    while(!isDivisble && currentTerm < number) {
        if(number % currentTerm === 0) {
            isDivisble = true;
        }
        currentTerm ++;        
    }
    if(!isDivisble) {
        console.log(number);
    }
}