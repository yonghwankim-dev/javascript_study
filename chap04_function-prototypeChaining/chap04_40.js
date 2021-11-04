// String 기본 타입에 메서드 추가

String.prototype.testMethod = function(){
    console.log("This is the String.prototype.testMethod()");
};

var str = "this is test";
str.testMethod();   // Expected Output : This is the String.prototype.testMethod()

console.log(String.prototype);