// 생성자 함수 방식에서의 프로토타입 체이닝

// Person() 생성자 함수
function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// foo 객체 생성
var foo = new Person('foo', 20, 'man');

// 프로토타입 체이닝
console.log(foo.hasOwnProperty('name'));    // Expected Output : true

// Person.prototype 객체 출력
console.dir(Person.prototype);  // Expected Output : Object {constructor : f Person(name,age,gender), [[Prototype]]: Object}

