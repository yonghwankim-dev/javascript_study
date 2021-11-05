/**
 * title : 함수 호이스팅
 * 
 * 함수 호이스팅이란?
 * 함수가 자신이 위치한 코드에 상관없이 함수 선언문 형태로 정의한
 * 함수의 유효 범위는 코드의 맨 처음부터 시작한다
 * 
 * 함수 호이스팅 발생 원인
 * 자바스크립의 변수 생성과 초기화 작업이 분리되서 진행되기 때문이다.
 */

// 함수 선언문과 함수 호이스팅
// 아직 이 시점에 add()함수가 정의되지 않았음에도 정의된 add() 함수를 호출하는 것이 가능하다.
console.log(add(2,3)); // 5
function add(x,y){
    return x+y;
}

console.log(add(3,4));   // 7

// 함수 표현식과 함수 호이스팅
// 함수 표현식으로 정의한 함수 변수는 호이스팅을 일으키지 않는다.
console.log(add2(2,3));    // uncaught type error
let add2 = function(x,y){
    return x+y;
};
console.log(add2(3,4));     // 7

