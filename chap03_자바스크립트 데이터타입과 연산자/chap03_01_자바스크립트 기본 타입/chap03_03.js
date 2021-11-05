/**
 * title : 문자열
 * 자바 스크립트에서는 한번 생성된 문자열은 읽기만 가능하고 수정은 불가능하다.
 */
// str 문자열 생성
let str = 'test';
console.log(str[0], str[1], str[2], str[3]);    // t e s t

// 문자열의 첫 글자를 대문자로 변경
str[0] = 'T';
console.log(str);   // test