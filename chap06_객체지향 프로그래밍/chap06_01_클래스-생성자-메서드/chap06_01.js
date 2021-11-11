function Person(name){
    this.name = name;

    this.getName = function(){
        return this.name;
    }

    this.setName = function(name){
        this.name = name;
    }
}

var kim = new Person("kim");
console.log(kim.getName()); // Expected Output : kim

kim.setName("lee");
console.log(kim.getName()); // Expected Output : lee


// 위 예제의 문제점은 Person 생성자 함수에 getName(), setName() 함수가
// 존재하여 객체를 생성할때마다 메모리를 차지함.
// 위 문제를 해결하기 위하여 Person.prototype 프로토타입 객체에 함수를
// 정의해야함(chap06_02.js)