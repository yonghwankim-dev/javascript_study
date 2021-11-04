// 프로토타입 객체 변경

function Person(name){
    this.name = name;
}

console.log(Person.prototype.constructor);  // Expected Output : f Person(name){...}

// foo 객체 생성
var foo = new Person('foo');
console.log(foo.country);                   // Expected Output : undefined

// 디폴트 프로토타입 객체 변경
Person.prototype = {
    country : 'korea'
};

console.log(Person.prototype.constructor);  // Expected Output : f Object(){...}

// bar 객체 변경
var bar = new Person('bar');
console.log(foo.country);                   // Expected Output : undefined
console.log(bar.country);                   // Expected Output : korea
console.log(foo.constructor);               // Expected Output : f Person(name){...}
console.log(bar.constructor);               // Expected Output : f Object(){...}
