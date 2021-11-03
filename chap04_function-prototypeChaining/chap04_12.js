/**
 * title : 함수 스코프 외부에서 내부 함수 호출하는 예제 코드
 * 
 * 클로저란 무엇인가?
 * - 실행이 끝난 parent()와 같은 부모 함수 스코프의 변수를 참조하는
 * inner()와 같은 함수를 클로저라고 한다.
 */

function parent(){
    let a = 100;

    // child() 내부 함수
    let child = function(){
        console.log(a);
    }

    // child() 함수 반환
    return child;
}

let inner = parent();
inner();    // 100