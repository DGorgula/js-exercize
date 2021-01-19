// armCheck function

function armCheck(number){
    const num = "" + number;
    const armedNum = num[0]**3+num[1]**3+num[2]**3;
    return armedNum === number;

}


// armCheck tests

console.log(armCheck(371)===true);
console.log(armCheck(232)===false);


// Main code

let threeDigitArmNums = [];
for (let i = 100; i < 1000; i++) {
    if(armCheck(i)){
        threeDigitArmNums.push(i);
    }
}

let result = "";
for (let i = 0; i < threeDigitArmNums.length; i++) {
    result += threeDigitArmNums[i] + ", ";
}
alert("The 3 digit Armstong numbers are:\n" + result);