
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");


// 5. Dynamic Import
// import하면 모듈의 모든 것을 import함
// 로딩 속도가 늦는 대신 유저가 필요한 모듈만 가져와서 호출할 수 있음
function doMath(){
	import("./math.js")
		.then(math => {
                        console.log(math.plus(2,2));
                    });
}
btn1.addEventListener("click", doMath);

async function doMath2(){
	const math = await import("./math.js");
	console.log(math.minus(2,2));
}
btn2.addEventListener("click", doMath2);
