/**
 * title : arguments 객체 예제 코드
 * 
 * arguments 객체의 구성
 * 1. 함수를 호출할 때 넘겨진 인자(배열형태) : 함수 호출할 때 첫번째 인자는 0번 인덱스, 
 *                                          두번째 인자는 1번 인덱스..
 * 2. length 프로퍼티 : 호출할때 넘겨진 인자의 개수를 의미
 * 3. callee 프로퍼티 : 현재 실행 중인 함수의 참조값(예제에서는 add() 함수)
 */

// add() 함수
function add(a,b){
    // arguments 객체 출력
    console.dir(arguments);
    return a+b;
}

console.log(add(1));        // NaN
console.log(add(1,2));      // 3
console.log(add(1,2,3));    // 3
