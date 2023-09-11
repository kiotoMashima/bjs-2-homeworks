function Student(name,gender,age) {
  this.name = name;
  this.gender = gender;
  this.age = age
  this.marks = [];
}
Student.prototype.setSubject = function (subjectName) {
  return this.subject = subjectName;
}
Student.prototype.addMarks = function (...marksToAdd){
  if (Student.exclude === "плохая учёба") {
    return 0;
  } else {
    return this.marks = marksToAdd;
  }
}
Student.prototype.getAverage = function() {
    if (typeof Student.marks !== 'undefined') {
      return 0;
    } else {
        let result = this.marks.reduce((acc,item,idx,arr)=>{
      return acc + item / arr.length;
     },0);
      return result;
    }
}
Student.prototype.exclude = function (reason) {
    delete Student2.marks;
    delete Student2.subject;
    return this.excluded = reason;
}
let Student1 = new Student("Васелиса","женский",19);
let Student2 = new Student("Олег","мужской",25);
Student1.setSubject("Algebra");
Student1.addMarks(5,5,5,5);
console.log(Student1);
Student2.setSubject("Geometry");
Student2.exclude('плохая учёба');
console.log(Student2);
console.log(Student1.getAverage()); 