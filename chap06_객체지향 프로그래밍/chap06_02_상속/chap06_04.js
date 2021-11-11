/* 프로토타입을 이용한 상속 */

// 인자로 들어온 객체(obj)를 부모로 하는 자식 객체 생성하여 반환
function create_object(obj){
    // F 생성자 함수
    function F(){

    }

    // F.prototype 프로토타입 객체는 obj를 가리킴
    F.prototype = obj;

    // 객체 생성
    return new F();
}