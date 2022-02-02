const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");


// 1. Named Export의 Import
// math 모듈에서 plus 함수만 import함
// 단, export한 함수와 import한 함수의 이름은 동일해야함
import {plus} from "./math.js";
result1.textContent = "plus(2,2) : " + plus(2,2);

// import한 함수 이름을 변경하고 싶다면 as 키워드 사용
import {plus as add} from "./math.js";
result2.textContent = "add(2,2) : " + add(2,2);
