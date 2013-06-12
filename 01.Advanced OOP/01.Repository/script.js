function School(name, town, classes){
  this._name = name;
  this._town = town;
  this._classes = classes;
}

function Person(fName, lName, age){
  this._fName = fName;
  this._lName = lName;
  this._age = age;
}

function Student(fName, lName, age, grade){
  Person.call(this, fName, lName, age);
  this._grade = grade;
}

Student.prototype = new Person();
Student.prototype.introduce = function(){
	return "Name: " + this._fName + " " + this._lName + ", Age: " + this._age + ", Grade: " + this._grade + ";";
}

function Teacher(fName, lName, age, speciality){
  Person.call(this, fName, lName, age);
  this._speciality = speciality;
}
Teacher.prototype = new Person();
Teacher.prototype.introduce = function(){
	return "Name: " + this._fName + " " + this._lName + ", Age: " + this._age + ", Speciality: " + this._speciality + ";";
}



//test
var botev = new School('Hristo Botev', 'Sofia', '25');

var yagodka = new Student('Yagodka', 'Yagodova', '16', '5.40');
console.log(yagodka.introduce()); //Name: Yagodka Yagodova, Age: 16, Grade: 5.40;

var chereshka = new Teacher('Chereshka', 'Chereshkova', '33', 'Math');
console.log(chereshka.introduce()); //Name: Chereshka Chereshkova, Age: 33, Speciality: Math;