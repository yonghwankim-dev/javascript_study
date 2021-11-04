/**
 * title : for in 문을 통한 객체 프로퍼티 출력
 * for in 문이 수행되면서 prop 변수에 foo 객체의
 * 프로퍼티가 하나씩 할당된다.
 */

// 객체 리터럴을 통한 foo 객체 생성
let foo = {
    name : "foo",
    age : 30,
    major : "computer science"
};

// for in 문을 이용한 객체 프로퍼티 출력
let prop;
for (prop in foo){
    console.log(prop, foo[prop]);
    // name foo
    // age 30
    // major computer science
}