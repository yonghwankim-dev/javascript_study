let subClass = function(){
    let F = function(){};

    let subClass = function(obj){
        let parent = this===window ? Function : this;
        
        let child = function(){
            let _parent = child.parent;
            
            // 현재 클래스의 부모 생성자가 있으면 그 함수를 호출합니다.
            // 다만 부모가 Function인 경우는 최상위 클래스에 도달했으므로
            // 실행하지 않습니다.
            if(_parent && _parent !== Function){
                _parent.apply(this, arguments);  // 부모 함수의 재귀적 호출
            }

            if(child.prototype._init){
                child.prototype._init.apply(this,arguments);
            }
        };

        /* 프로토타입 체이닝 설정 */
        F.prototype = parent.prototype;
        child.prototype = new F();
        child.prototype.constructor = child;
        child.parent = parent;
        child.subClass = arguments.callee;

        for(let i in obj){
            // 프로토타입 체인을 올라가지 않고 해당 객체 내에서만 찾음
            if(obj.hasOwnProperty(i)){
                child.prototype[i] = obj[i];
            }
        }
        return child;
    }
    return subClass;
}();

let person_obj = {
    _init : function(){
        console.log("person init");
    },
    getName : function(){
        return this._name;
    },
    setName : function(name){
        this._name = name;
    }
};

let student_obj = {
    _init : function(){
        console.log("student init");
    },
    getName : function(){
        return "Student Name: " + this._name;
    }
};

let Person = subClass(person_obj);  // Person 클래스 정의
let person = new Person();          // Expected Output : person init 출력
person.setName("zzoon");
console.log(person.getName());  // Expected Output : zzoon

let Student = Person.subClass(student_obj); // Student 클래스 정의
let student = new Student();    // Expected Output : person init, student init 출력
student.setName("iamhjoo");
console.log(student.getName()); // Expected Output : Student Name : iamhjoo

console.log(Person.toString());