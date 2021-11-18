const fibo = function(){
    const cache = {
        "0" : 0,
        "1" : 1
    };

    const func = function(n){
        if(typeof(cache[n])==="number"){
            result = cache[n];
        }else{
            result = cache[n] = func(n-1) + func(n-2);
        }
        return result;
    }
    return func;
}();

console.log(fibo(10));  // Expected Output : 55