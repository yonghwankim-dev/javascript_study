// 내부 함수의 this 바인딩 문제를 해결한 예제 코드
var value2 = 100;

var myObject2 = {
    value2 : 1,
    func1 : function(){
        var that = this;    // myObject 객체를 가리킨다.

        that.value2 +=1;
        console.log("func1() called. this.value : " + that.value2);      // Expected Output : 2

        // func2() 내부 함수
        func2 = function(){
            that.value2 +=1;
            console.log("func2() called. this.value : " + that.value2);  // Expected Output : 3

            // func3() 내부 함수
            func3 = function(){
                that.value2 +=1;
                console.log("func3() called. this.value : " + that.value2);  // Expected Output : 4
            }
            func3();
        }
        func2();
    }
}

myObject2.func1();