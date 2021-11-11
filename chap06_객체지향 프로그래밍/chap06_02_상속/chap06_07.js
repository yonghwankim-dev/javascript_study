/* 클래스 기반의 상속 */

function Person(name){
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.setName = function(name){
    this.name = name;
}

function Student(name){
    Person.apply(this, arguments);
}

const kim = new Person("kim");
Student.prototype = kim;

const me = new Student("zzoon");
me.setName("zzoon");
console.log(me.getName());  // Expected Output : zzoon

