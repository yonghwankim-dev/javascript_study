function reduce(func, arr, memo){
    const len = arr.length;
    let i=0;
    let accum = memo;

    for(;i<len;i++)
    {
        accum = func(accum,arr[i]);
    }

    return accum;
}

let arr = [1,2,3,4];

const sum = function(x,y){
    return x+y;
}

const multiply = function(x,y){
    return x*y;
}

console.log(reduce(sum,arr,0));         // Expected Output : 10
console.log(reduce(multiply,arr,1));    // Expected Output : 24
    