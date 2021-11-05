
// 함수의 캡슐화 after

var getCompleteStr = (function(){
    // 클로저가 외부 함수 내의 buffAr 변수 참조, 외부에서 buffAr 접근 금지
    var buffAr = [
        'I am ',
        '',
        '. I live in ',
        '',
        '. I\'am ',
        '',
        ' years old.',
    ];

    // 클로저
    return (function(name, city, age){
        buffAr[1] = name;
        buffAr[3] = city;
        buffAr[5] = age;

        return buffAr.join('');
    });
})();

var str = getCompleteStr('zzoon', 'seoul', 16);
console.log(str);   // Expected Output : I am zzoon. I live in seoul. I'am 16 years old.




