/**
 * title : 기본 타입과 참조 타입의 비교 연산
 * 
 * a==b은 값을 비교
 * objA==objB은 참조값을 비교
 */

let a = 100;
let b = 100;

let objA = {value:100};
let objB = {value:100};
let objC = objB;

console.log(a==b);          // true
console.log(objA==objB);    // false
console.log(objB==objC);    // true

