// loop in a loop - very nice to say! ;)

let result = "";
for (let j = 0; j <= 5; j++) {
    for (let i = 0; i < j; i++) {
        result += "* ";
    }
    result += "\n";
}
alert(result);