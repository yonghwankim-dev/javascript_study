// 함수를 호출한 경우 생성되는 실행 컨텍스트의 스코프 체인

var var1 = 1;
var var2 = 2;

function func(){
    var var1 = 10;
    var var2 = 20;

    console.log(var1);      // Expected Output : 10
    console.log(var2);      // Expected Output : 20
}

func();
console.log(var1);  // Expected Output : 1
console.log(var2);  // Expected Output : 2
