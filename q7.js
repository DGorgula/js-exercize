/*  q7 - for loop 1-100,
    multiples of 3 "Fizz",
    multiples of 5 "Buzz",
    multiples of 3 and 5 "FizzBuzz"
*/

for (let i = 1; i <= 100; i++) {
    if(i%3 === 0){
        console.log("Fizz");
    }
    else if(i%5 === 0){
        console.log("Buzz");
    }
    else if(i%5 === 0 && i%3 === 0){
        console.log("FizzBuzz");
    }
    else{
        console.log(i);
    }
}

