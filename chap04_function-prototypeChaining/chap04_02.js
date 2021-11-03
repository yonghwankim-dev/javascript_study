/**
 * title : 기명 함수 표현식의 함수 호출 방법
 * 
 */
/*
let add = function sum(x,y){
    return x+y;
};

console.log(add(3,4));  // 7
console.log(sum(3,4));  // error
*/
let factorialVar = function factorial(n){
    if(n<=1)
    {
        return 1;
    }
    return n* factorial(n-1);
}

console.log(factorialVar(3)); // 6
console.log(factorial(3));  // Uncaught ReferenceError: factorial is not defined
