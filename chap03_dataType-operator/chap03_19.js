/**
 * title : 배열과 객체의 차이점
 * 1. 배열은 length 프로퍼티를 갖지만 객체는 length 프로퍼티를 갖지 못한다.
 * 2. 배열은 push() 메서드를 사용할 수 있지만 객체는 사용하지 못한다.
 * 
 * 객체는 push() 메서드를 사용하지 못하는 경우
 * 객체의 경우 프로토타입 객체가 Object.prototype 객체이다.
 * 배열의 경우 프로토타입 객체가 Array.prototype -> Object.prototype 객체이다.
 * 따라서 push() 메서드는 Array.prototype 객체에 존재하기 때문에 배열 객체는
 * 사용이 가능하다.
 * 
 * 객체의 프로퍼티를 대괄호로 접근시 문자열 형태로 접근해야한다.
 * 하지만 colorsObj[0]와 같이 하여도 정상적으로 수행된다.
 * 이유는 자바스크립트 엔지이 [] 연산자 내에 숫자가 사용될 시
 * 해당 숫자를 자동으로 문자열 형태로 변경해준다.
 */

// colorsArray 배열
let colorsArray = ["orange", "yellow", "green"];
console.log(colorsArray[0]);    // orange
console.log(colorsArray[1]);    // yellow
console.log(colorsArray[2]);    // green

// colorsObj 객체
let colorsObj = {
    "0" : "orange",
    "1" : "yellow",
    "2" : "green"
};

console.log(colorsObj[0]);    // orange
console.log(colorsObj[1]);    // yellow
console.log(colorsObj[2]);    // green

// typeof 연산자 비교
console.log(typeof colorsArray);    // object (not array)
console.log(typeof colorsObj);      // object

// length 프로퍼티
console.log(colorsArray.length);    // 3
console.log(colorsObj.length);      // undefined

// 배열 표준 메서드
colorsArray.push("red");    // ["orange", "yellow", "green", "red"]
colorsObj.push("red");      // Uncaught TypeError : colorsObj.push is not a function
