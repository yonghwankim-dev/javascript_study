const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");


// 2. Default Export의 Import
// default export는 한개의 객체에 저장되므로
// import할때 중괄호를  사용하지 않아도 됩니다.
import math from './math.js';  // 모듈의 이름과 동일하게
import myMath from './math.js';    // 다른 이름으로 import해도 됩니다.

result1.textContent = "plus(2,2) : " + math.plus(2,2);
result2.textContent = "minus(2,2) : " + myMath.minus(2,2);
