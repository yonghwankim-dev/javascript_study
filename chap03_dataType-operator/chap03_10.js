/**
 * title : 동일한 객체를 참조하는 objA와 objB
 * 
 * objB에 objA를 할당함으로써 objB는 objA와
 * 같은 참조값을 가리킨다.
 */

let objA = {
    val : 40
};

let objB = objA;

console.log(objA.val);  // 40
console.log(objB.val);  // 40

objB.val = 50;
console.log(objA.val);  // 50
console.log(objB.val);  // 50

