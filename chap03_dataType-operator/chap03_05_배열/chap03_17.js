/**
 * title : 배열 length 프로퍼티의 명시적 변경
 */

let arr = [0,1,2];
console.log(arr.length);    // 3

arr.length = 5;
console.log(arr);           // [0, 1, 2, empty, empty]

arr.length = 2;
console.log(arr);           // [0, 1]
console.log(arr[2]);        // undefined