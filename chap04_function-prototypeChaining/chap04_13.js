/**
 * title : 함수를 리턴하는 함수
 * 
 * 함수도 일급객체이므로 함수 자체를 리턴이 가능하다.
 */

// self() 함수
let self = function(){
    console.log("a");

    return function(){
        console.log("b");
    }
}
self = self();  // a
self();         // b
