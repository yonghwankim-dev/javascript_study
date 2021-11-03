/**
 * title : Array() 생성자 함수를 통한 배열 생성
 * 
 * Array 생성자 함수 인자 개수에 따른 동작
 * 호출 시 인자가 1개이고 숫자인 경우 : 호출된 인자를 length로 갖는 빈 배열 생성
 * 그 외의 경우 : 호출된 인자를 요소로 갖는 배열 생성
 */

let foo = new Array(3);
console.log(foo);           // [empty*3]
console.log(foo.length);    // 3

let bar = new Array(1,2,3);
console.log(bar);           // [1,2,3]
console.log(bar.length);    // 3



