/**
 * title : 함수 호출과 this
 * 
 * arguments 객체란 무엇인가?
 * - 함수의 인자와 인자의 개수를 관리하는 객체이다.
 * - 실제 배열 객체가 아닌 유사배열 객체이다.
 */

// arguments 객체
// 1. func(), func(1) 호출처럼 정의된 함수의 인자보다 적게 함수를 호출했을 경우,
// 넘겨지지 않은 인자에는 undefined 값이 할당된다.
// 2. 인자 개숩보다 많게 함수를 호출했을 경우에는 에러가 발생하지 않고, 초과된 인수는 무시된다.

// 함수 형식에 맞춰 인자를 넘기지 않더라도 함수 호출이 가능함을 나타내는 예제 코드
function func(arg1, arg2){
    console.log(arg1,arg2);
}

func();         // undefined undefined
func(1);        // 1 undefined
func(1,2);      // 1 2
func(1,2,3);    // 1 2
