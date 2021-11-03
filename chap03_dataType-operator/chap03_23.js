/**
 * title : splice() 메서드를 이용한 배열 프로퍼티 삭제
 * 
 * splice(start, deleteCount, item...)
 * start - 배열 시작 위치
 * deleteCount - start에서 지정한 시작 위치부터 삭제할 요소의 수
 * item - 삭제할 위치에 추가할 요소
 */

let arr = ["zero","one","two","three"];

arr.splice(2,1);    // 2번째 요소에서 1개의 원소를 제거
console.log(arr);   // ["zero","one","three"]
console.log(arr.length);    // 3


