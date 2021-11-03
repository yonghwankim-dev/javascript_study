/**
 * title : 배열의 프로토타입과 객체의 프로토타입 비교
 * 
 * emptyArry.__proto__는 Array.prototype 객체를 가리킨다.
 * Array.prototype 객체에는 push() 메서드가 존재하여 
 * 배열은 사용이 가능하다.
 * 
 * emptyObj.__proto__는 Object.prototype 객체를 가리킨다.
 * 
 */

let emptyArray = [];
let emptyObj = {};

console.dir(emptyArray.__proto__);
console.dir(emptyObj.__proto__);