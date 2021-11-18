const cacher = function(cache, func){
    const calculate = function(n){
        if(typeof(cache[n])==="number"){
            result = cache[n];
        }else{
            result = cache[n] = func(calculate,n);
        }
        return result;
    }
    return calculate;
};

const fact = cacher({"0":1},function(func,n){
    return n * func(n-1);
});

const fibo = cacher({"0":0, "1" : 1},function(func,n){
    return func(n-1) + func(n-2);
});

console.log(fact(10));  // Expected Output : 3628800
console.log(fibo(10));  // Expected Output : 55
