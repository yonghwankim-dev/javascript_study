/**
 * title : Function() 생성자 함수를 이용한 add() 함수 설정
 * 
 * new Function(arg1, arg2, ..., argN, functionBody);
 * 
 * 일반적으로 잘 사용하지 않는다.
 */

let add = new Function("x","y","return x + y");
console.log(add(3,4));  // 7