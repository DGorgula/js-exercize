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


//      showLarger in action

let a = prompt("Enter first Parameter:");
let b = prompt("Enter first Parameter:");

showLarger(a,b);