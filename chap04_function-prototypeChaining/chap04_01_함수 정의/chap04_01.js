/**
 * title : 함수 정의
 * 함수를 생성하는 3가지 방식
 * 1. 함수 선언문
 *  함수명을 정의하여 함수를 생성하는 방식
 * 2. 함수 표현식
 *  익명 함수로 함수를 생성하고 변수에 저장하는 방식
 * 3. Function() 생성자 함수
 */

// add() 함수 선언문
function add(x,y){
    return x+y;
}

console.log(add(3,4));  // 7

// add() 함수 표현식
let add2 = function(x,y){
            return x+y;
        };

let plus = add2;

console.log(add2(3,4)); // 7
console.log(plus(3,4)); // 7

