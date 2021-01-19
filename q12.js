function multiplesUpToThousand(num) {
    let sum = 0;
    let ans = 0;
    for (let i = 0; ans < 1000; ++i) {
        ans = num*i;
        if(ans<1000){
            sum += ans;
        }
    }
    return sum;
}


alert(multiplesUpToThousand(5) + multiplesUpToThousand(3));