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