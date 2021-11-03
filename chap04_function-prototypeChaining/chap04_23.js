/**
 * title : 호출패턴과 this 바인딩
 * 1. 객체의 메서드 호출할때 this 바인딩
 * 2. 함수를 호출할때 this 바인딩
 * 3. 생성자 함수를 호출할 때 this 바인딩
 * 4. call과 apply 메서드를 이용한 명시적인 this 바인딩
 * 
 * 객체의 메서드 호출할때 this 바인딩
 * - 메소드란 무엇인가?
 * 객체의 프로퍼티가 함수인 경우 메서드이다.
 * 
 * - this 바인딩이란 무엇인가?
 * 메서드 내부 코드에서 사용된 this는 해당 메서드를 호출한 객체로 바인딩된다.
 */

// 메서드 호출 사용시 this 바인딩
let myObject = {
    name : "foo",
    sayName : function(){
        // myObject 객체가 호출시 myObject.name으로 치환
        console.log(this.name);
    }
};

// otherObject 객체 생성
let otherObject = {
    name : "bar"
};

// otherObject.sayName() 메서드
otherObject.sayName = myObject.sayName;

// sayName() 메서드 호출
myObject.sayName();     // foo
otherObject.sayName();  // bar




