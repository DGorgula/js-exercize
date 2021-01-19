//  q8 - find the first 5 happy numbers


// function happyStep

function happyStep(number) {
    const num = "" + number;
    let productSum = 0;
    for (let i = 0; i < num.length; i++) {
        productSum += num[i]**2; 
    }
    return productSum;
}


// happyStep tests

console.log( happyStep(3) === 9);
console.log( happyStep(13) === 10);


// function happyChecker

function happyChecker(number){
    let tempNum = number;
    let i = 0;
    while (i < 30) {
       tempNum = happyStep(tempNum);
       if(tempNum === 1){
           return true;
        }
        i++
    }
    return false;
}


// happyChecker tests

console.log( happyChecker(1) === true);
console.log( happyChecker(10) === true);
console.log( happyChecker(2) === false);



// Main code

let happyNumbers = [];
console.log( happyNumbers.length);
for (let i = 1; happyNumbers.length < 5; i++) {
    if(happyChecker(i)){
        happyNumbers.push(i);
    }
}
console.log(happyNumbers);
let happyNumbersString = " ";
happyNumbers.forEach(element => {
    happyNumbersString += element+", ";
});
alert("The 5 first happy numbers are:"+happyNumbersString)
