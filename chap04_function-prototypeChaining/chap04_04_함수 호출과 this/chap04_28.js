// 생성자 함수의 동작 방식
var Person = function(name){
    // 함수 코드 실행 전
    this.name = name;
    // 함수 리턴
};

// foo 객체 생성
var foo = new Person('foo');
console.log(foo.name);  // Expected Output : foo