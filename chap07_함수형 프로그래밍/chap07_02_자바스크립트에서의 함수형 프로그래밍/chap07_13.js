Array.prototype.reduce = function(callback, memo){
    // this가 null인지 배열인지 체크
    // callback이 함수인지 체크

    const obj = this;
    let value, accumulated_value = 0;

    for(let i=0; i<obj.length; i++){
        value = obj[i];
        accumulated_value = callback.call(null, accumulated_value, value);
    }
    return accumulated_value;
};

const arr = [1,2,3];
const accumulated_val = arr.reduce(function(a,b){
    return a + b*b;
});

console.log(accumulated_val);   // Expected Output : 14 1*1+2*2+3*3 = 14
