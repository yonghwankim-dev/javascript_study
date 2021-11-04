// 함수를 호출할때 this 바인딩을 보여주는 예제 코드
var test = "This is test";
console.log(window.test);   // Expected Output : This is test

var sayFoo = function(){
    console.log(this.test); // sayFoo() 함수 호출시 this는 전역 객체(window)에 바인딩된다.
};

sayFoo();   // Expected Output : This is test