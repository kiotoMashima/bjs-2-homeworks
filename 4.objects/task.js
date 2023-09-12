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
    if (this.marks) {
      return this.marks.push(...marksToAdd);
    }
}
Student.prototype.getAverage = function() {
     if (this.marks === 'undefined' || this.marks.length === 0) {
      return 0;
    }
    return this.marks.reduce((acc, item) => acc + item/this.marks.length, 0);
}
Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    return this.excluded = reason;
}
const Student1 = new Student("Васелиса","женский",19);
const Student2 = new Student("Олег","мужской",25);
Student1.setSubject("Algebra");
Student1.addMarks(4,5,4,4);
console.log(Student1);
Student2.setSubject("Geometry");
Student2.exclude('плохая учёба');
console.log(Student2);
console.log(Student1.getAverage()); 