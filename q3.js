function showLarger(a,b){
    if (a>b){
        return console.log(a);
        
    }
    return console.log(b);
}

//      showLargerTests

showLarger(3,11)===11;
showLarger(80,11)===80;
showLarger(3,-7)===3;
showLarger(-3,7)===7;
showLarger(-3,-70)===-3;
console.clear();


let a = 0;
let b = -1;
let c = 4;

let orderedNumbers = [];
if(a>b && a>c){
    orderedNumbers.push(a);
    if(b>c){
        orderedNumbers.push(b);
    }
    else{
        orderedNumbers.push(c);
    }
}
else if(b>a && b>c){
    orderedNumbers.push(b);
    if(a>c){
        orderedNumbers.push(a);
        orderedNumbers.push(c);
    }
    else{
        orderedNumbers.push(c);
        orderedNumbers.push(a);
    }
}
else if(c>a && c>b){
    orderedNumbers.push(c);
    if(a>b){
        orderedNumbers.push(a);
        orderedNumbers.push(b);
    }
    else{
        orderedNumbers.push(b);
        orderedNumbers.push(a);
    }
}

alert(orderedNumbers[0]+", "+orderedNumbers[1]+", "+orderedNumbers[2]);