function calculate(a,b,c){
    return a*b+c;
}

function curry(func){
    const args = Array.prototype.slice.call(arguments, 1);  // arguments 유사 배열 객체에서 1번인덱스부터 끝가지 인자를 추출합니다.
    
    return function(){
        // calculate.apply(null, args.concat(인자들))
        return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
    }
}

const new_func1 = curry(calculate,1);   // calculate 첫번째 인자 고정(a)
console.log(new_func1(2,3))    // Expected Output : 5 // 1*2+3=5
const new_func2 = curry(calculate,1,3); // calculate 첫번째, 두번째 인자 고정(a,b)
console.log(new_func2(3));  // Expected Output : 1*3+3=6
