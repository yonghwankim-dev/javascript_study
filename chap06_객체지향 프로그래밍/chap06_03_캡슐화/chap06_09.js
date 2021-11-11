/* 캡슐화 */

const Person = function(arg){
    let name = arg ? arg : "zzoon";

    this.getName = function(){
        return name;
    };

    this.setName = function(arg){
        name = arg;
    };
};

const me = new Person();
console.log(me.getName());  // Expected Output : zzoon
me.setName("kim");
console.log(me.getName());  // Expected Output : kim
console.log(me.name);       // Expected Output : undefined