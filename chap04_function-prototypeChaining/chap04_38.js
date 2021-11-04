// 객체 리터럴 방식에서의 프로토타입 체이닝

var myObject = {
    name : 'foo',
    sayName : function(){
        console.log("My Name is " + this.name);
    }
}

myObject.sayName(); // Expected Output : My Name is foo
console.log(myObject.hasOwnProperty("name"));   // Expected Output : true
console.log(myObject.hasOwnProperty("nickName"));   // Expected Output : false
myObject.sayNickName(); // Expected Output : Uncaught TypeError : myObject.sayNickName() is not a function