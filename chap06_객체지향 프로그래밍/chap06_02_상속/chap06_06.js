/* extend() 함수를 추가 적용하여 상속 구현 */

const person = {
    name : "zzoon",
    getName : function(){
        return this.name;
    },
    setName : function(name){
        this.name = name;
    }
};

function create_object(obj){
    function F(){

    };

    F.prototype = obj;

    return new F();
}

function extend(obj, prop){
    if(!prop){
        prop = obj;
        obj = this;
    }
    for(var i in prop){
        obj[i] = prop[i];
    }
}

const student = create_object(person);
const added = {
    setAge : function(age){
        this.age = age;
    },
    getAge : function(){
        return this.age;
    }
};

// added의 프로퍼티를 student에 추가
extend(student, added);

student.setAge(25);
console.log(student.getAge());  // Expected Output : 25



