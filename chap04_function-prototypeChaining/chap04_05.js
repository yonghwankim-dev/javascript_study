/**
 * title : 자바 스크립트에서는 함수도 객체다.
 * 
 */

// add() 함수도 객체처럼 프로퍼티를 가질 수 있다.
// 함수 선언 방식으로 add() 함수 정의
function add(x,y){
    return x+y;
}

// add() 함수 객체에 result, status 프로퍼티 추가
add.result = add(2,3);
add.status = "OK";

console.log(add.result);    // 5
console.log(add.status);    // OK
console.dir(add);


/**
 * title : 자바 스크립에서 함수는 값으로 취급된다.
 * 함수도 일반 객체처럼 취급될 수 있다.
 * 
 * 일급 객체 특징
 * 1. 리터럴에 의해 생성
 * 2. 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능
 * 3. 함수의 인자로 전달 가능
 * 4. 함수의 리턴값으로 리턴 가능
 * 5. 동적으로 프로퍼티를 생성 및 할당 가능
 * 
 * 일급 객체란 무엇인가?
 * 객체를 함수의 인자나 리턴값으로 전달할 수 있는 객체
 * 자바스크립트에서 함수는 일급객체로 취급하며 자바스크립트
 * 의 함수는 함수의 인자나 리턴값으로 전달이 가능하고 변수에도
 * 저장이 가능하다.
 */

// 1. 변수나 프로퍼티의 값으로 할당

// 변수에 함수 할당
let foo = 100;
let bar = function(){return 100;};
console.log(bar()); // 100

// 프로퍼티에 함수 할당
let obj = {};
obj.baz = function(){return 200;};
console.log(obj.baz());     // 200



// 2. 함수를 다른 함수의 인자로 넘긴 코드

// 함수 표현식으로 foo2() 함수 생성
let foo2 = function(func){
    func();
};

// foo2 함수 실행
foo2(function(){
    console.log("function can be used as the argument");
});

// 3. 리턴 값으로 활용
// 함수를 리턴하는 foo3() 함수 정의
let foo3 = function(){
    return function(){
        console.log("this function is the return value");
    };
};

foo3()();   // this functions is the return value

