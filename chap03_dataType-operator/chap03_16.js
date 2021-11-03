/**
 * title : 배열의 length 프로퍼티 변경
 * 배열의 length는 배열 내의 가장 큰 인덱스에 1을 더한 값이다.
 */

let arr = [];
console.log(arr.length);    // 0

arr[0] = 0;         // arr.length = 1
arr[1] = 1;         // arr.length = 2
arr[2] = 2;         // arr.length = 3

arr[100] = 100;     
console.log(arr.length);    // 101
