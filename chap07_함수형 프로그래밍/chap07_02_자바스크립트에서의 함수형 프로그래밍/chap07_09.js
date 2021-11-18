const print_all = function(arg){

    for(let i in this){
        console.log(i + " : " + this[i]);
    }
    for(let i in arguments){
        console.log(i + " : " + arguments[i]);
    }
};

const myobj = {
    name : "zzoon"
};

const myfunc = print_all.bind(myobj);   // bind() 함수 호출시 this를 myobj를 가리키도록 함
myfunc();   // Expected Output : name : zzoon

const myfunc1 = print_all.bind(myobj, "iamhjoo","others");  // bind() 함수 호출하여 this를 myobj 가리킴
                                                            // arguments : [iamhjoo,others]
myfunc1("insidejs");                                        // arguments : [iamhjoo,others,insidejs]
// Expected Output
// name : zzoon
// 0 : iamhjoo
// 1 : others
// 2 : insidejs


