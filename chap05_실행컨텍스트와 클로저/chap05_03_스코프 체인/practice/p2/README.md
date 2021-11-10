문제
문제 p1의 문제점은 내부 함수의 this는 전역 객체(window)를 가리킨다는 것입니다.
하지만 p1의 원래 의도는 obj.value의 값을 참조하는 것입니다.
obj.func1의 내부함수들이 this를 obj를 가리키도록 하십시오.
