// 프로토타입 객체의 동작 메서드 생성 예제 코드

// Person() 생성자 함수
function Person(name){
    this.name = name;
}



// foo 객체 생성
var foo = new Person('foo');

// foo.sayHello() // Expected Output : Error, sayName() 메서드가 정의되지 않음

// 프로토타입 객체에 sayHello() 메서드 정의
Person.prototype.sayHello = function(){
    console.log("hello");
}

foo.sayHello();  // Expected Output : hello