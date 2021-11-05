/**
 * title : 객체 생성 (Object() 생성자 함수 애용)
 * 객체 생성 방법
 * 1. Object() 생성자 함수 이용
 * 2. 객체 리터럴 방식 이용
 * 3. 생성자 함수 이용
 * 
 */

// Object()를 이용해서 foo 빈 객체 생성
var foo = new Object();

// foo 객체 프로퍼티 생성
foo.name = "foo";
foo.age = 30;
foo.gender = "male";

console.log(typeof foo);    // object
console.log(foo);           // Object { name:"foo", age:30, gender: "male"}
