/**
 * title : prototype 프로퍼티
 * 
 * 1. 모든 함수는 prototype 프로퍼티를 가지고 있다.
 * 2. 함수 객체의 prototype 프로퍼티는 모든 객체의 부모를 나타내는 내부 프로퍼티인 __proto__과 다르다.
 * 
 * prototype 프로퍼티, __proto__ 프로퍼티의 공통점
 * - 두 프로퍼티 모두 프로토타입 객체를 가리킨다는 점에서는 공통점
 * 
 * prototype 프로퍼티와 __proto__ 프로퍼티의 차이점
 * - 모든 객체에 있는 내부 프로퍼티인 __proto__는 객체 입장에서 자신의 부모 역할을 하는 프로토타입 객체를
 * 가리킨다.
 * - 함수 객체가 가지는 prototype 프로퍼티는 이 함수가 생성자로 사용될 때 이 함수를 통해 생성된 객체의
 * 부모 역할을 하는 프로토타입 객체를 가리킨다.
 * 
 * prototype 프로퍼티의 구성
 * - constructor 프로퍼티 : constructor 프로퍼티는 자신과 연결된 함수를 가리킨다.
 */

// 함수 객체와 프로토타입 객체와의 관계를 보여주는 코드

function myFunction(){
    return true;
}
console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);