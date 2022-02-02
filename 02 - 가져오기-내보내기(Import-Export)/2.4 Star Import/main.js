const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");


// 4. * 표시를 활용한 import
import * as myMath from './math.js';

result1.textContent = "plus(2,2) : " + myMath.plus(2,2);
result2.textContent = "minus(2,2) : " + myMath.minus(2,2);
