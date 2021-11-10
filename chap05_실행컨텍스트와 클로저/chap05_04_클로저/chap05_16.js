// 루프 안에서 클로저를 활용할 때는 주의하자

function countSeconds(howMany){
    console.log("call countSeoncds " + howMany);
    // 자유 변수 i
    for(var i=1; i<=howMany; i++){
        console.log("for i : " + i);
        setTimeout(function(){
            console.log(i); // Expected Output : 1 2 3, Real Output : 4 4 4
        },i*1000);
    }
}

// countSeconds(3);    // Expected Output : 4 4 4 4
// Expected Output : call countSeoncs 3
//                  for i : 1
//                  for i : 2
//                  for i : 3
//                  4
//                  4
//                  4
//                  4

// countSeoncds 실행속도가 빠르기 때문에 setTimeOut 함수의 인자인
// 익명함수는 countSeconds 함수가 종료된 이후 실행된다.
// 익명함수는 자유변수 i를 참조하는데 이 i는 실행이 종료되었을 때 값이 4가 되어있다.
// 따라서 1초 간격으로 1 2 3이 출력되는 것이 아닌 4 4 4 4가 출력되는 것이다.

// solution
function countSeconds_solution(howMany){
    for(var i=1; i<=howMany; i++){
        (function(currentI){
            setTimeout(function(){
                console.log(currentI);
            },currentI*1000);
        }(i));
    }
}

countSeconds_solution(3);   // Expected Output : 1 2 3

// 반복문을 수행하면서 바깥쪽 익명함수에 i(1~3)를 인자로 주어 호출합니다.
// setTimeout 함수안의 익명함수는 자유변수 currentI를 참조한다.
// 자유변수 currentI는 1 2 3으로 저장된다.

