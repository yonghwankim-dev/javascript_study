// 실행 컨텍스트 생성 과정

// 1. 변수객체 생성
// 2. arguments 객체 생성
// 3. 스코프 정보 생성
// 4. 변수 생성
// 5. this 바인딩
// 6. 코드 실행

function execute(param1, param2){
    var a = 1, b = 2;
    function func(){
        return a+b;
    }
    return param1 + param2 + func();
}

execute(3,4);