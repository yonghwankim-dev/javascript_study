// 생성자 함수에서 명시적으로 기본타입(boolean, number, string) 값을 리턴했을 경우
// 결과 : 리턴값을 무시하고 this로 바인딩된 객체가 리턴됨

function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    
    return 20;
}

var foo = new Person('foo',30,'man');
console.dir(foo);



