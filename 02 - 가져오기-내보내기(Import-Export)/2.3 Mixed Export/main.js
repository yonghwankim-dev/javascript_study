const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");


// 3. Default export-import, Named export-import 혼합 사용
import myMath, {minus} from './math.js';

result1.textContent = "plus(2,2) : " + myMath.plus(2,2);
result2.textContent = "minus(2,2) : " + minus(2,2);
