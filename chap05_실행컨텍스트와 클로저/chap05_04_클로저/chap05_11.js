
// 함수의 캡슐화 before

// 단점 : buffAr이 전역변수로 다른 함수에서 접근이 가능하여 변질의 우려가 있음

var buffAr = [
    'I am ',
    '',
    '. I live in ',
    '',
    '. I\'am ',
    '',
    ' years old.',
];

function getCompleteStr(name, city, age){
    buffAr[1] = name;
    buffAr[3] = city;
    buffAr[5] = age;

    return buffAr.join('');
}

var str = getCompleteStr('zzoon', 'seoul', 16);
console.log(str);   // Expected Output : I am zzoon. I live in seoul. I'am 16 years old.





