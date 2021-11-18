// callback 함수를 사용하지 않은 경우
function func1(){
    function arrive(){
        console.log("1. 레스토랑 도착");
    }
    function book(){
        console.log("2. 자리 예약");
    }
    function wait(){
        setTimeout(function(){
            console.log("3. 자리 비었음");
        },3000);
        
    }
    function eat(){
        console.log("4. 식사");
    }
    arrive();
    book();
    wait();
    eat();
    
    // Expected Output
    // 1. 레스토랑 도착
    // 2. 자리 예약
    // 3. 자리 비었음
    // 4. 식사

    // Real Output
    // 1. 레스토랑 도착
    // 2. 자리 예약
    // 4. 식사
    // 3. 자리 비었음
}
// func1();


// callback 함수를 사용한 경우
function func2(){
    function arrive(){
        console.log("1. 레스토랑 도착");
    }
    function book(){
        console.log("2. 자리 예약");
    }
    function wait(callbackFunc){
        setTimeout(function(){
            console.log("3. 자리 비었음");
            callbackFunc();
        },3000);
        
    }
    function eat(){
        console.log("4. 식사");
    }
    arrive();
    book();
    wait(eat);

    // Expected Output
    // 1. 레스토랑 도착
    // 2. 자리 예약
    // 3. 자리 비었음
    // 4. 식사
}
// func2();

// callback hell 예제
function func3(){
    function paraseValue(response, callbackFunc){
        setTimeout(() => {
            console.log("1. " + response);
            callbackFunc("id");    
        }, 3000);
        
    }
    
    function auth(id, callbackFunc){
        setTimeout(() => {
            console.log("2. " + id);
            callbackFunc("result");    
        }, 3000);
    }
    
    function display(result, callbackFunc){
        setTimeout(() => {
            console.log("3. " + result);
            callbackFunc("text");    
        }, 3000);
    }
    
    function f(){
        paraseValue("response",function(id){
            auth("id", function(result){
                display("result", function(text){
                    setTimeout(() => {
                        console.log("4. " + text);
                    }, 3000);
                });
            });
        });
    }
    f();
}
// func3();

// promise 성공 예제
function func4(){
    let bye = new Promise((resolve,reject)=>{
        console.log("1. hello");
        setTimeout(() => {
            resolve("2. bye");
        }, 3000);    
    });
    bye.then((result)=>{
            console.log(result);
            console.log("3. hello again");
        });
}
// func4();

// promise 실패 예제
function func5(){
    let bye2 = new Promise((resolve, reject)=>{
        console.log("1. hello");
        let val = 1;
        if(val!==1){
            setTimeout(() => {
                resolve("2. bye");
            }, 3000);
        }
        else{
            reject(new Error("fail!!"));
        }
    });
    bye2.then((result)=>{
                console.log(result);
                console.log("3. hello again");
            })
        .catch((error)=>{
                console.log(error);
            });
    
}
// func5();

// Promise 방식이 콜백 함수보다 좋은점
function func6(){
    function func1(){
        return new Promise((resolve,reject)=>{
            resolve();
        });
    }
    
    function a(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("call a");
                resolve();
            },3000);
        });
    }
    
    function b(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("call b");
                resolve();
            },3000);
        });
    }
    
    function c(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("call c");
                resolve();
            },3000);
        });
    }
    
    func1().then(a)
            .then(b)
            .then(c);
}
// func6();



// async 사용 예제
function func7(){
    async function foo(){
        return "foo";   // -> Promise.resolve("foo");
    }
    
    const result = foo();
    console.log(result);
}
// func7();

// await 사용 예제
function func8(){
    async function foo(){
        return "foo";   // -> Promise.resolve("foo")
    }
    
    async function func1(){
        const result = await foo(); // -> Promise.resolve("foo").then(()=>undefined);
        console.log(result);    // Expected Output : foo
    }
    func1();
}
// func8();


// async/await 성공 처리 예제
function func9(){
    async function foo(){
        return "foo";
    }
    
    async function func1(){
        try{
            const result = await foo();
            console.log("성공 : " + result);
        }catch(e){
            console.log("실패 : " + e.message);
        }
    }
    func1();
}
// func9();


// async/await 실패 처리 예제
function func10(){
    async function foo(){
        throw new Error("fail!!");
    }
    
    async function func1(){
        try{
            const result = await foo();
            console.log("성공 : " + result);
        }catch(e){
            console.log("실패 : " + e.message);
        }
    }
    func1();    
}
func10();
