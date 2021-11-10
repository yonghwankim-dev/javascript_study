
import Student from "./Student.js";

Student.prototype.sayStudentNumber = function(){
    return this.studentNumber;
}
Student.prototype.sayName = function(){
    return this.name;
}
Student.prototype.sayGender = function(){
    return this.gender;
}
Student.prototype.sayDept = function(){
    return this.dept;
}
Student.prototype.sayGrade = function(){
    return this.grade;
}
Student.prototype.sayAllInfo = function(){
    console.log(`\tStudent Number : ${this.studentNumber}\n
    Name : ${this.name}\n
    Gender : ${this.gender}\n
    Dept : ${this.dept}\n
    Grade : ${this.grade}\n
    `);
}

// student 객체 생성
const kim = new Student(1,"kim","male","computer",3.5);
const lee = new Student(2,"lee","female","electronic",4.0);
const bae = new Student(3,"bae","male","computer",3.8);

// 배열 리스트 생성 및 저장
const students = [kim,lee,bae];

// 테이블에 Student 정보 저장
let tbody = document.querySelector("#stdTbl > tbody");
students.forEach(std =>{
    const row = `
    <tr>
        <td>${std.sayStudentNumber()}</td>
        <td>${std.sayName()}</td>
        <td>${std.sayGender()}</td>
        <td>${std.sayDept()}</td>
        <td>${std.sayGrade()}</td>
    </tr>
    `
    tbody.innerHTML += row;
});


