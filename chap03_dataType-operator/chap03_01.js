/**
 * title : 자바 스크립트 데이터 타입
 * 
 * 1. 기본 타입
 * - 숫자(number)
 * - 문자열(string)
 * - 불린값(boolean)
 * - undefined
 * - null
 * 
 * 2. 참조 타입
 *  2.1 객체(Object)
 *  - 배열(array)
 *  - 함수(function)
 *  - 정규표현식
 */

// 숫자 타입
let intNum = 10;
let floatNum = 0.1;

// 문자열 타입
let singleQuoteStr = 'single quote string';
let doubleQuoteStr = "double quote string";
let singleChar = 'a';

// 불린 타입
let boolVar = true;

// undefined 타입
let emptyVar;

// null 타입
let nullVar = null;

console.log(typeof intNum);             // number
console.log(typeof floatNum);           // number
console.log(typeof singleQuoteStr);     // string
console.log(typeof doubleQuoteStr);     // string
console.log(typeof singleChar);         // string
console.log(typeof boolVar);            // boolean
console.log(typeof emptyVar);           // undefined
console.log(typeof nullVar);            // object