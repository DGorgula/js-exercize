


function commonDivisors(a, b){
    let result = [];
    let maxPossibleValue;
    if (a <= 0 || b <= 0) {
        return ["not something I calculate. You should try two possitive numbers."];
    }
    else if (a>b) {
        maxPossibleValue = b;
    }
    else{
        maxPossibleValue = a;
    }
    for (let i = 1; i <= maxPossibleValue; i++) {
        if(a%i === 0 && b%i === 0){
            result.push(i);
        }
    }
    return result;
}
 
function greatestPicker(arr){
    let greatest = 0;
    if (typeof(arr[0]) === "string") {
        return arr[0];
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > greatest){
            greatest = arr[i];
        }
    }
    return greatest;
}


function main(a, b) {
    return greatestPicker(commonDivisors(a, b));
}


a = prompt();
b = prompt();
alert("The greatest devisor is " + main(a, b));