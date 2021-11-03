/**
 * title : 함수 객체의 기본 프로퍼티
 * 1. 함수도 객체이다. 
 * 2. 일반 객체와는 다르게 함수 객체만의 표준 프로퍼티가 정의되어 있다.
 *  - arguments : 함수를 호출할때 전달된 인자 값들
 *  - caller : 자신을 호출한 함수
 *  - name : 함수의 이름
 *  - prototype : 
 *  - __proto__ : 모든 자바스크립트 객체가 가지는 자신의 프로토타입을 가리키는 [[Prototype]] 내부 프로퍼티
 *                  크롬에서는 __proto__ 와 [[prototype]]이 같은 개념이다.
 * 
 * add() 함수 역시 함수 객체의 부모 역할을 하는 프로토타입 객체를 가리킨다.
 * 
 * add()와 같이 함수 객체의 부모 역할을 하는 프로토타입 객체를 Function.prototype 객체라고 명명하고, 이것 역시 함수 객체라고 정의한다.
 * 크롬에서는 Function Protytpe 객체를 Empty()함수라고 명명한다.
 * 
 * Function.prototype 객체의 프로토타입 객체는 존재하는가?
 * Object.prototype 객체가 프로토타입 객체이다.
 * 
 */

// add() 함수 객체 프로퍼티를 출력하는 코드
function add(x,y){
    return x+y;
}

console.dir(add);   // arguments, caller, length등과 같은 프로퍼티가 존재한다.
