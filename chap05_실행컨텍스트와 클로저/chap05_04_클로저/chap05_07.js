// 클로저

function outerFunc(){
    var x = 10;
    var innerFunc = function(){
        console.log(x);             // Expected Output : 10
    }
    return innerFunc;
}

var inner = outerFunc();
inner();