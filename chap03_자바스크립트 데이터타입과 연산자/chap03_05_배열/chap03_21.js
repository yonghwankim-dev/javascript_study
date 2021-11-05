/**
 * title : 배열의 동적 프로퍼티 생성
 * 
 * 동적으로 프로퍼티를 추가하는 경우 length 프로퍼티의 값은 변하지 않는다.
 * 배열의 length 프로퍼티는 배열 원소의 가장 큰 인덱스가 변했을 경웨만 변경된다.
 */

// 배열 생성
let arr = ["zero", "one", "two"];
console.log(arr.length);    // 3

// 프로퍼티 동적 추가
arr.color = "blue";
arr.name = "number_array";
console.log(arr.length);    // 3

// 배열 원소 추가
arr[3] = "red";
console.log(arr.length);    // 4

// 배열 객체 출력
console.dir(arr); // {"0" : "Zero", "1" : "one", "2" : "two", "3" : "red", 
                  //    "color" : "blue", "name" : "number_array"}


/**
 * title : 배열의 프로퍼티 열거
 * 
 * 프로퍼티까지 전부 출력하고 싶다면 for in문 사용
 * 배열의 원소만 출력하고 싶다면 for문 사용
 */
for(let prop in arr){
    console.log(prop, arr[prop]);
}

for(let i=0; i<arr.length; i++){
    console.log(i, arr[i]);
}