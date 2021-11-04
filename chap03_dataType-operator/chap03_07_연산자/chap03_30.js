/**
 * title : !! 연산자 활용을 통한 불린값 변환
 * 
 * !! 연산자는 무엇인가?
 * 피연산자를 불린값으로 변환한다.
 * 
 * false 판정 피연산자 종류
 * 1. ''
 * 2. false
 * 3. 0
 * 4. null
 * 5. undefined
 * 6. NaN
 */

console.log(!!0);           // false
console.log(!!1);           // true
console.log(!!"string");    // true
console.log(!!'');          // false
console.log(!!true);        // true
console.log(!!false);       // false
console.log(!!null);        // false
console.log(!!undefined);   // false
console.log(!!{});          // true, 객체가 빈 객체라도 true
console.log(!![1,2,3]);     // true