/**
 * title : push() 메서드와 length 프로퍼티
 */

// arr 배열 생성
let arr = ["zero", "one", "two"];

// push() 메서드 호출
arr.push("three");
console.log(arr);   // ["zero", "one", " two", "three"]

// length 값 변경 후, push() 메서드 호출
arr.length = 5;
arr.push("four");
console.log(arr); // ["zero", "one", " two", "three", empty, "four"]