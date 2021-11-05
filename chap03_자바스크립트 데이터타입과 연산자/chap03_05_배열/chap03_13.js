/**
 * title : 객체 생성 및 출력
 * 
 * 프로토타입(prototype) 프로퍼티란 무엇인가?
 * 모든 객체가 가지고 있는 부모 역할을 하는 객체
 */

let foo = {
    name : "foo",
    age : 30
};

// 에러가 발생하지 않고 예제가 실행될수 있는 이유는
// foo 객체의 프로토타입에 toString() 메서드가 이미 정의
// 되어 있고 foo 객체가 상속처럼 toString() 메서드를 호출했기 때문이다.
console.log(foo.toString());    // [object Object]


// age, name 프로퍼티외의 __proto__ 프로퍼티가 있는 것을 확인할 수 있다.
// __proto__ 프로퍼티가 foo 객체의 부모인 프로토타입 객체이다.
console.dir(foo);