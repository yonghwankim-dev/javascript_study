function multiply(arr){
    const len = arr.length;
    let i = 0, result = 1;
    
    for(;i<len;i++)
    {
        result *= arr[i];
    }

    return result;
}

let arr = [1,2,3,4];
console.log(multiply(arr));  // Expected Output : 24