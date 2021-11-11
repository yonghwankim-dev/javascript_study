/* create_object() 함수를 이용하여 상속 구현 */

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

const student = create_object(person);
student.setName("kim");
console.log(student.getName()); // Expected Output : kim

