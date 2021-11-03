/**
 * title : Call by Value와 Call by Reference 차이
 * Call by Value란 무엇인가?
 * 함수를 호출할때 인자로 기본 타입의 값을 넘길 경우,
 * 호출된 함수의 매개변수로 복사된 값이 전달된다.
 * 
 * Call by Reference
 * 함수를 호출할때 인자로 참조 타입의 값을 넘길 경우
 * 호출된 함수의 매개변수로 참조값이 전달된다.
 * 따라서 함수 내부에서 객체의 프로퍼티값이 변경시
 * 실제 객체의 값이 변경될 수 있다.
 */

let a = 100;
let objA = {value:100};

function changeArg(num, obj)
{
    num = 200;
    obj.value = 200;

    console.log(num);   // 200
    console.log(obj);   // obj {value : 200}
}

changeArg(a,objA);

console.log(a);         // 100
console.log(objA);      // objA {value : 200}