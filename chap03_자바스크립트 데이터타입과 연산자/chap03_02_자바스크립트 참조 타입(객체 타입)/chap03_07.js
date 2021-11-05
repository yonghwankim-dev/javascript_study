/**
 * title : 객체의 프로퍼티 접근하기
 * 객체 프로퍼티 접근방법
 * 1. 대괄호([]) 표기법
 * 2. 마침표(.) 표기법
 * 
 * 프로퍼티 읽기
 * foo[name] => undefined
 * 자바스크립에서는 대괄호 표기법에서 접근하려는 프로퍼티의
 * 이름을 문자열 형태로 만들지 않으면 모든 자바스크립트 객체에서
 * 호출 가능한 toString()이라는 메서드를 자동으로 호출해서 이를
 * 문자열로 바구려는 시도를 한다.
 * 
 * 프로퍼티 갱신
 * foo.major = "electronics engineering";
 * 
 * 프로퍼티 동적 생성
 * foo.age = 30;
 * 자바스크립트 객체의 프로퍼티에 값을 할당할 때, 프로퍼티가 이미
 * 있을 경우는 해당 프로퍼티의 값이 갱신되지만, 객체의 해당 프로퍼티가
 * 없을 경우에는 새로운 프로퍼티가 동적으로 생성된 후 값이 할당된다.
 * 
 * 대괄호 표기법만을 사용해야 하는 경우
 * console.log(foo.full-name);
 * 마침표 표기법에서 full-name에서 "-"은 연산자 예약어이므로
 * 대괄호 표기법으로 프로퍼티를 읽어야 한다.
 * 
 * NaN(Not a Number)이란 무엇인가?
 * 자바스크립트에서 NaN은 수치연산을 해서 정상적인 값을 얻지
 * 못할 때 출력되는 값이다.
 * ex) 1-"hello"
 *  
 */

// 객체 리터럴 방식을 통한 foo 객체 생성
let foo = {
    name : "foo",
    major : "computer science"
};

// 객체의 프로퍼티 읽기
console.log(foo.name);      // foo   
console.log(foo["name"]);   // foo
console.log(foo.nickname);  // undefined

// 객체의 프로퍼티 갱신
foo.major = "electronics engineering";
console.log(foo.major);     // electronics engineering
console.log(foo["major"]);  //electronics engineering

// 객체 프로퍼티 동적 생성
foo.age = 30;               
console.log(foo.age);       // 30

// 대괄호 표기법만을 사용해야 할 경우
foo["full-name"] = "foo bar";
console.log(foo["full-name"]);  // foo bar
console.log(foo.full-name);     // NaN
console.log(foo.full);          // undefined
console.log(name);              // undefined
