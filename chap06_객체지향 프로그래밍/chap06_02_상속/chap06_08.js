/* 두 클래스(Person, Student) 사이에 중재자를 생성 */

function Person(name){
    this.name = name;
}

Function.prototype.method = function(name,func){
    this.prototype[name] = func;
}

Person.method("getName",function(){
    return this.name;
});

Person.method("setName",function(name){
    this.name = name;
});

function Student(arg){

}

function F(){

}

F.prototype = Person.prototype;
Student.prototype = new F();
Student.prototype.constructor = Student;

Student.super = Person.prototype;

const me = new Student();
me.setName("zzoon");
console.log(me.getName());

const inherit = function(Parent, Child){
    const F = function(){

    };

    return function(Parent, Child){
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.super = Parent.prototype;
    };
}();

const kim = new Student();
inherit(Person,Student);    // kim을 Person의 자식으로 설정
kim.setName("kim");
console.log(kim.getName());    // Expected Output : kim



