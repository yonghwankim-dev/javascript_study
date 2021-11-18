function calculate(a,b,c){
    return a*b+c;
}

function curry2(func){
    const args = Array.prototype.slice.call(arguments,1);   // [1,undefined,4]

    return function(){
        let arg_idx = 0;
        for(let i=0; i<args.length && arg_idx < arguments.length; i++){
            // args[1]=undefined이므로 arguments[0](3)을 args[1]에 저장
            if(args[i]===undefined){
                args[i] = arguments[arg_idx++];
            }
        }
        return func.apply(null, args);
    }
}

const new_func = curry2(calculate,1,undefined,4);
console.log(new_func(3));   // Expected Output : 1*3+4 = 7

