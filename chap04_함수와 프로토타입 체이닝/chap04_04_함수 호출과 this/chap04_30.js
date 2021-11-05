// new를 붙이지 않고 생성자 함수 호출 시의 오류

var Person = function(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var qux = Person('qux',20,'man');
console.log(qux);           // Expected Output : undefined

console.log(window.name);   // Expedted Output : qux
console.log(window.age);    // Expedted Output : 20
console.log(window.gender); // Expedted Output : man

// Expected Output : Uncaught TypeError
// console.log(qux.name);      
// console.log(qux.age);
// console.log(qux.man);


// new 미사용 호출을 해결하기 위한 solution
// solution1 : 강제로 인스턴스 생성하기
function A(arg){
    if(!(this instanceof A)){
        return new A(arg);
    }
    this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);

console.log(a.value);           // Expected Output : 100
console.log(b.value);           // Expected Output : 10
console.log(globalThis.value);  // Expected Output : undefined

// solution2 : arguments.callee 활용
// solution1에서 좀더 진화하여 arguments.callee를 활용하여 적용함.
// arguments.callee를 활용하여 모듈을 작성하면 특정 함수 이름과 상관없이
// 이 패턴을 공통으로 사용하는 모듈을 작성할 수 있는 장점이 존재함.

// if(!(this instanceof arguments.callee))

function B(arg){
    if(!(this instanceof arguments.callee)){
        return new arguments.callee(arg);
    }
    this.value = arg ? arg : 0;
}

var c = new B(100);
var d = B(10);

console.log(c.value);       // Expected Output : 100
console.log(d.value);       // Expected Output : 10