/**
 * title : 객체 프로퍼티 삭제
 * 
 * delete 연산자는 객체의 프로퍼티를 삭제한다.
 * 단, 객체 자체를 삭제하지는 못한다.
 */

// 객체 리터럴을 통한 foo 객체 생성
let foo = {
    name : "foo",
    nickname : "babo"
};

console.log(foo.nickname); // babo
delete foo.nickname;
console.log(foo.nickname);  // undefined

delete foo;
console.log(foo.name);      // foo