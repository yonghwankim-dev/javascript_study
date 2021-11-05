// 프로토타입 체이닝과 동적 프로퍼티 생성

function Person(name){
    this.name = name;
}

Person.prototype.country = "Korea";

var foo = new Person('foo');
var bar = new Person('bar');

console.log(foo.country);   // Expected Output : Korea
console.log(bar.country);   // Expected Output : Korea

foo.country = "USA";

console.log(foo.country);   // Expected Output : USA    
console.log(bar.country);   // Expected Output : Korea

