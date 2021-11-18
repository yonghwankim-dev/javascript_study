/* 캡슐화 */
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
        child.subClass = arguments.callee; // arguments.callee : subClass(obj){ ... }

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

const person = function(arg){
    let name = undefined;

    return {
        _init : function(arg){
            name = arg ? arg : "zzoon";
        },
        getName : function(){
            return name;
        },
        setName : function(arg){
            name = arg;
        }
    };
    
};

Person = subClass(person());
let iamhjoo = new Person("iamhjoo");
console.log(iamhjoo.getName()); // Expected Output : iamhjoo

Student = Person.subClass();
let student = new Student("student");
console.log(student.getName()); // Expected Output : student
