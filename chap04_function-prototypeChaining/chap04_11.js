/**
 * title : 함수의 다양한 형태
 * 1. 콜백함수
 * 2. 즉시 실행 함수
 * 3. 내부 함수
 * 
 * 3. 내부 함수
 * 내부 함수란 무엇인가?
 * - 자바스크립트에서 함수 코드 내부에 또다른 함수가 정의된 함수
 *
 * 내부 함수의 용도는 무엇인가?
 * 1. 클로저 생성
 * 2. 부모 함수 코드에서 외부에서의 접근을 막고 독립적인 헬퍼 함수 구현
 * 
 * 내부 함수에서는 자신을 둘러싼 부모 함수의 변수에 접근이 가능하다.
 * - child() 함수 내부에서 변수 a가 선언되지 않았음에도 a 변수의 값을 참조할 수 있다.
 * - 이와 같이 내부 함수에서 자신을 둘러싼 부모 함수의 변수에 접근이 가능한 이유는
 *  스코프 체이닝 때문이다.
 * 
 * 내부 함수는 일반적으로 자신이 정의된 부모 함수 내부에서만 호출이 가능하다.
 * - child() 함수는 parent() 함수 내부에서만 호출이 가능하다.
 * - parent() 함수 바같에서 child() 함수 호출 시도시 에러가 발생하는 이유는 
 * 자바스크립트의 함수 스코핑 때문이다.
 * 
 * 함수 스코핑
 * - 함수 내부에 선언된 변수는 함수 외부에서 접근이 불가능한 것처럼
 * 함수 내부에 선언된 함수는 함수 외부에서 접근이 불가능하다.
 */

// parent() 함수 정의
function parent(){
    let a = 100;
    let b = 200;

    // child() 내부 함수 정의
    function child(){
        let b = 300;

        console.log(a);
        console.log(b);
    }
    child();
}

parent();   // 100 300
child();    // uncaught ReferenceError : childi s not defined
