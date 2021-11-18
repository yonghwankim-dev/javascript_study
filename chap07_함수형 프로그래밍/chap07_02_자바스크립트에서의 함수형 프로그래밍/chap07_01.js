const f1 = function(input){
    let result;
    /* 암호화 작업 수행 */
    result = 1;
    return result;
}

const f2 = function(input){
    let result;
    /* 암호화 작업 수행 */
    result = 2;
    return result;
}

const f3 = function(input){
    let result;
    /* 암호화 작업 수행 */
    result = 3;
    return result;
}

const get_encrypted = function(func){
    const str = "zzoon";

    return function(){
        return func.call(null,str);
    }
}

var encrypted_value = get_encrypted(f1)();
console.log(encrypted_value);
var encrypted_value = get_encrypted(f2)();
console.log(encrypted_value);
var encrypted_value = get_encrypted(f3)();
console.log(encrypted_value);
