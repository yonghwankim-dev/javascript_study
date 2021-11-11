Function.prototype.method = function(name, func){
    this.prototype[name] = func;    // this->Person
}

// 생성자 함수
function Person(name){
    this.name = name;
}

// 메서드 정의
Person.method("getName",function(){
    return this.name;
});

Person.method("setName",function(name){
    this.name = name;
});

const kim = new Person("kim");
const lee = new Person("lee");

console.log(kim.getName());     // Expected Output : kim
console.log(lee.getName());     // Expected Output : lee

// Person.method("getName",function(){return this.name;});
// => Person.prototype["getName"] = function(){ return this.name; }

