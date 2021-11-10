
var value = 1;
const value2 = 2;
const obj = {
    value : 2,
    func1 : function(){
        function func2(){
            function func3(){
                console.log(this.value); // Expected Output : 1
            }
            console.log(this.value); // Expected Output : 1
            func3();
        }
        console.log(this.value); // Expected Output : 2
        func2();
    }
}

console.log(value); // Expected Output : 1

// let과 const로 선언된 변수는 블록 스코프이기 때문에 window
// 객체 내부의 블록에서 선언된 것으로 평가되어 전역 객체(window)의
// 프로퍼티로 활용되기 어렵다.
console.log(window.value2);  // Expected Output : undefined
obj.func1();