// 생성자 함수에서 명시적으로 객체를 리턴했을 경우
// 결과 : 명시적으로 넘긴 객체나 배열이 리턴된다.

// Person() 생성자 함수
function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    
    return {name : 'bar', age:20, gender:'woman'};
}

var foo = new Person('foo');
console.dir(foo);

