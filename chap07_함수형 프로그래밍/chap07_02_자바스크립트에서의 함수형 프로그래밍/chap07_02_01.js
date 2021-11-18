function sum(arr){
    const len = arr.length;
    let i = 0, sum = 0;
    
    for(;i<len;i++)
    {
        sum += arr[i];
    }

    return sum;
}

let arr = [1,2,3,4];
console.log(sum(arr));  // Expected Output : 10