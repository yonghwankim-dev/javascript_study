/* 캡슐화 */

const Person = function(arg){
    let name = arg ? arg : "zzoon";

    return {
        getName : function(){
            return name;
        },
        setName : function(arg){
            name = arg;
        }
    };
    
};

const me = Person();    // or const me = new Person()
console.log(me.getName());  // Expected Output : zzoon