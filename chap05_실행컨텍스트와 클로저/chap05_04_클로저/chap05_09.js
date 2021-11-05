// 특정 함수에 사용자가 정의한 객체의 메서드 연결하기

// HelloFunc() 생성자 함수
function HelloFunc(func){
    this.greeting = "hello";
}

// HelloFunc 생성자 함수의 프로토타입 객체에게 call 메서드 정의
HelloFunc.prototype.call = function(func){
    func ? func(this.greeting) : this.func(this.greeting);
}

// userFunc 함수는 매개변수를 그대로 출력한다.
var userFunc = function(greeting){
    console.log(greeting);
}

var userFunc2 = function(greeting){
    console.log("hello " + greeting);
}


// 객체 생성
var objHello = new HelloFunc();

// 객체에 userFunc 메서드 동적 생성
objHello.func = userFunc;

// call 메서드의 매개변수로 함수를 넣으면 인자로 넣은 함수를 호출
// 매개변수가 없으면 objHello 객체의 func 메서드 호출
objHello.call();    // Expected Output : hello

objHello.call(userFunc2);   // Expected Output : hello hello

// 이 예제에서 HelloFunc() 생성자 함수는 greeting만을 인자로 넣어 사용자가
// 인자로 넘긴 함수를 실행시킨다. 그래서 사용자가 정의한 함수도 한 갱의 인자를 받는 함수(userFunc2)
// 를 정의할 수 밖에 없다.

// 여기서 사용자가 원하는 인자를 더 넣어서 HelloFunc()를 이용하여 호출하려면 어떻게 해야 할까? chap05_10.js