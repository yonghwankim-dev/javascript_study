/**
 * title : 유사 배열 객체에서 apply()를 활용한 배열 메서드 호출
 */

 let arr = ["bar"];
 let obj = {
     name : "foo",
     length : 1
 };
 
 arr.push("baz");
 console.log(arr);   // ["bar","baz"]
 
 Array.prototype.push.apply(obj, ["baz"]);
 console.log(obj);  // {"1" : "baz", name:"foo", length:2}
 
 