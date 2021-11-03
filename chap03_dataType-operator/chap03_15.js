/**
 * title : 배열 요소의 동적 생성
 * 
 * 배열의 요소는 기본 및 참조 타입 모두 저장 가능하다.
 * 자바스크립는 배열의 크기를 현재 배열의 인덱스 중 가장 큰 값을 기준으로 한다.
 */

// 빈 배열
let emptyArr = [];
console.log(emptyArr[0]);   // undefined

// 배열 요소 동적 생성
emptyArr[0] = 100;
emptyArr[3] = "eight";
emptyArr[7] = true;

console.log(emptyArr); // [100, empty, empty, "eight", empty, empty, empty, true]

console.log(emptyArr.length);   // 8
