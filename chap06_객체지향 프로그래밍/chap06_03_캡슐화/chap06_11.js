/* 자유변수가 객체이면 수정이 가능한 문제 발생 */

const ArrCreate = function(arg){
    let arr = [1,2,3];

    return {
        getArr : function(){
            return arr;
        }
    };
};

let obj = ArrCreate();
let arr = obj.getArr();
arr.push(5);
console.log(obj.getArr());  // Expected Output : [1,2,3,5]

