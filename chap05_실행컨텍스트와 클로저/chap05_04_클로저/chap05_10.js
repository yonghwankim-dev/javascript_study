function HelloFunc(func){
    this.greeting = "hello";
}

HelloFunc.prototype.call = function(func){
    func ? func(this.greeting) : this.func(this.greeting);
}

var objHello = new HelloFunc(); // step1 HelloFunc 객체 생성

////////////////////////////////////////////////////////////////////////////////////////////

// obj => obj1
// methodName => who
// name => zzoon
function saySomething(obj, methodName, name){
    // step4 내부 함수 반환 (클로저)
    return (
      function(greeting){
          return obj[methodName](greeting,name);    // obj[methodName](greeting,name) === obj.who(greeting, name)
      }  
    );
}

// 생성자 함수
// 첫번째 인자 : objHello
// 두번째 인자 : 사용자가 출력을 원하는 사람 이름
function newObj(obj, name){
    // this는 빈 객체에 바인딩
    obj.func = saySomething(this, "who", name); // step3 saySomething 함수 실행
    return obj;
}

newObj.prototype.who = function(greeting, name){
    console.log(greeting + " " + (name || "everyone"));
}

var obj1 = new newObj(objHello, "zzoon");   // step2 newObj 객체 생성
obj1.call();
