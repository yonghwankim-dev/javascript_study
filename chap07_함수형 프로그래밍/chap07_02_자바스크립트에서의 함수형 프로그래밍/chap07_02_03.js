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
