function Person(name){
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.setName = function(name){
    this.name = name;
}

const kim = new Person("kim");
const lee = new Person("lee");

console.log(kim.getName());     // Expected Output : kim
console.log(lee.getName());     // Expected Output : lee

// 생성자 함수에 함수를 넣은 문제를 해결하기 위하여 Person.prototype
// 프로토타입 객체에 함수를 정의하여 각 객체마다 함수가 메모리 공간을
// 차지하는 문제를 해결함
