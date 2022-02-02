// 2. Default Export
// Named Export처럼 하나하나 export 키워드를 명시하지 않고
// default 키워드를 사용하여 한개의 객체에 export하고자 하는
// 객체들을 명시합니다.
// 한 파일에 한개의 export default만 존재합니다.
// 한 파일에서 딱 한개만 export하고자 할때 사용해도 됩니다.
const plus = (a,b)=>{return a+b};
const minus = (a,b)=>{return a-b};
const divide = (a,b)=>{return a/b};

export default {plus,minus,divide};
