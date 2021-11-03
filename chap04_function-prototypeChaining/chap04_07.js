/**
 * title : 함수 객체의 length 프로퍼티
 * 
 * length 프로퍼티란?
 * 1. 모든 함수 객체가 가져야할 표준 프로퍼티
 * 2. 함수가 정상적으로 실행될 때 기대되는 인자의 개수
 */

function fun0(){

}

function fun1(x){
    return x;
}

function fun2(x,y){
    return x+y;
}

function fun3(x,y,z){
    return x+y+z;
}

console.log("fun0.length : " + fun0.length);    // 0
console.log("fun1.length : " + fun1.length);    // 1
console.log("fun2.length : " + fun2.length);    // 2
console.log("fun3.length : " + fun3.length);    // 3

