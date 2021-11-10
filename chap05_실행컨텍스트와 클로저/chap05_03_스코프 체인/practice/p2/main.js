
var value = 1;

const obj = {
    value : 2,
    func1 : function(){
        var that = this;
        function func2(){
            function func3(){
                console.log(that.value); // Expected Output : 2
            }
            console.log(that.value); // Expected Output : 2
            func3();
        }
        console.log(this.value); // Expected Output : 2
        func2();
    }
}

console.log(this.value); // Expected Output : 1
obj.func1();