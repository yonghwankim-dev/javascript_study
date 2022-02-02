// 3. Default export-import, Named export-import 혼합해서 사용
// Named export : export 하고자 하는 모듈들을 명시
// Default export : default 키워드에 export하고자 하는 함수 명시

// plus 함수는 default export
// minus, divide 함수는 named export

const plus = (a,b)=>{return a+b};
export const minus = (a,b)=>{return a-b};
export const divide = (a,b)=>{return a/b};

export default {plus};
