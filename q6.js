//  q6 - find the grade of the average marks.


//  variables definition.

let marks = [80, 77, 88, 95, 68];
let averageMark;
let summedMarks = 0;


//  for loop to find the marks sum.

for (let i = 0; i < marks.length; i++) {
    summedMarks +=marks[i];
}


//  finds the average mark.

averageMark = summedMarks/marks.length;


//  finds the right grade.

if( averageMark>=80){
    if (averageMark>=90) {
        console.log("A");
    }
    else{
        console.log("B");
    }
}
 else if(averageMark>=60){
     if(averageMark>=70){
         console.log("C");
     }
     else{
         console.log("D");
     }
}
 else{
     console.log("E");
 }