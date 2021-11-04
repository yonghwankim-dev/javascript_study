var value = 100; // 전역 변수 value 정의

var myObject = {
    value : 1,
    func1 : function(){
        this.value += 1;    // 메서드로 호출하였기 때문에 자신을 호출한 객체인 myObject으로 대응된다.
        console.log("func1() called. this.value : " + this.value);      // 2

        // func2() 내부 함수
        func2 = function(){
            this.value += 1;    // 내부 함수이기 때문에 전역 객체(window)로 바인딩된다.
            console.log("func2() called. this.value : " + this.value);  // 101

            // func3() 내부 함수
            func3 = function(){
                this.value += 1;    // 내부 함수이기 때문에 전역 객체(window)로 바인됭된다.
                console.log("func3() called. this.value : " + this.value);  // 102
            }
            func3();
        }
        func2();
    }
}

myObject.func1();