// slice() 메서드 사용 예제

// 배열의 시작은 0번째부터 시작
// slice(start,end);
// slice() 메서드 호출시 start~end-1까지 요소를 잘라서 배열로 반환한다.
var arrA = [1,2,3];

var arrB = arrA.slice(0);   // Expected Variable : [1,2,3]
var arrC = arrA.slice();    // Expected Variable : [1,2,3]
var arrD = arrA.slice(1);   // Expected Variable : [2,3]
var arrE = arrA.slice(1,2); // Expected Variable : [2]