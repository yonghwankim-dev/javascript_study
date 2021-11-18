const fact = function(){
    const cache = {
        "0" : 1
    };
    const func = function(n){
        let result = 0;

        if(typeof(cache[n])==="number"){
            result = cache[n];
        }else{
            result = cache[n] = n*func(n-1);
        }

        return result;
    }
    return func;
}();

console.log(fact(10));  // Expected Output : 3628800
console.log(fact(20));  // Expected Output : 2432902008176640000

