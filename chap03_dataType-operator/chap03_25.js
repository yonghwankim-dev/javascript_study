/**
 * title : 유사 배열 객체의 배열 메소드 호출
 * obj는 배열이 아니므로 push() 메소드 호출시 에러가 발생한다.
 * apply() 메서드를 활용하면 유사 배열 객체도 배열 메서드를 사용하는 것이 가능하다.
 * 
 */

let arr = ["bar"];
let obj = {
    name : "foo",
    length : 1
};

arr.push("baz");
console.log(arr);   // ["bar","baz"]

obj.push("baz");    // error

