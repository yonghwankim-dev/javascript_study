/**
 * title : null과 undefined
 * undefined
 * - 자바스크립트 환경 내에서 기본적으로 값이 할당되지 않은 변수
 * - undefined는 타입이자 값을 나타냄
 * 
 * null
 * - 개발자가 명시적으로 값이 비어있음을 나타내는데 사용
 * - null 타입 변수 결과 object이다.
 * 
 */

// null 타입 변수 생성
let nullVar = null;

console.log(typeof nullVar === null);   // false
console.log(nullVar === null);          // true