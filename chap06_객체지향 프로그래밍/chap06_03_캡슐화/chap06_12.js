/* 캡슐화 */

const Person = function(arg){
    let name = arg ? arg : "zzoon";

    let Func = function(){}
    Func.prototype = {
        getName : function(){
            return name;
        },
        setName : function(arg){
            name = arg;
        }
    };
    return Func;
}();

let me = new Person();
console.log(me.getName());  // Expected Output : "zzoon"

