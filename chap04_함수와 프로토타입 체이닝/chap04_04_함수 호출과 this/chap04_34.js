// return 문 없는 일반 함수의 리턴값 확인
// 결과 : 일반함수나 메서드는 리턴값을 지정하지 않을 경우, undefined 값이 리턴됨

var noReturnFunc = function(){
    console.log("This function has no return statement");
}

var result = noReturnFunc();    // Expected Output : This function has no return statement
console.log(result);            // Expected Output : undefined
