
let a = -5;
let s = -2;
let d = -6;
let f = 0;
let g = -1 ;

let largestAorS;
let largestDorF;

if(a>s){
    largestAorS=a;
}
else{
    largestAorS=s;
}

if(d>f){
    largestDorF = d;
}
else{
    largestDorF = f;
}
if( largestDorF>largestAorS){
    alert(largestDorF);
}
else{
    alert(largestAorS);
}