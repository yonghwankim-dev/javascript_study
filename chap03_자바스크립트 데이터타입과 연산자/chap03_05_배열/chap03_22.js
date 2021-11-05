/**
 * title : delete 연산자를 이용한 배열 프로퍼티 삭제
 * 
 * delete 연산자로 배열의 원소값을 삭제해도 length 프로퍼티의
 * 값의 변화는 없다.
 * 
 * 요소들을 완전히 삭제하고 싶은 경우 splice() 배열 메서드를 사용한다.
 */

let arr = ["zero","one","two","three"];
delete arr[2];
console.log(arr);           // ["zero","one", empty,"three"]
console.log(arr.length);    // 4