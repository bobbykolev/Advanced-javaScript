if (!Object.prototype.extend) {
    Object.prototype.extend = function (properties) {
        function createObj() { };
        createObj.prototype = Object.create(this);
        for (var prop in properties) {
            createObj.prototype[prop] = properties[prop];
        }
        createObj.prototype._super = this;
        return new createObj();
    }
}
 
var Person = {
    init: function (fName, lName, age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    },
    introduce: function () {
        return "Name: " + this.fName + " " + this.lName + ", Age: " + this.age;
    }
};
 
var Student = Person.extend({
    init: function (fName, lName, age, grade) {
        this._super = Object.create(this._super);
        this._super.init(fName, lName, age);
        this.grade = grade;
    },
    introduce: function () {
        return this._super.introduce() + ", grade: " + this.grade;
    }
});

var Teacher = Person.extend({
    init: function (fName, lName, age, speciality) {
        this._super = Object.create(this._super);
        this._super.init(fName, lName, age);
        this.speciality = speciality;
    },
    introduce: function () {
        return this._super.introduce() + ", speciality: " + this.speciality;
    }
});
 
var yagodka = Object.create(Student);
yagodka.init("Yagodka", "Yagodova", "16", 5.40);
console.log(yagodka.introduce());
 
var Chereshka = Object.create(Teacher);
Chereshka.init('Chereshka', 'Chereshkova', '33', 'Math');
console.log(Chereshka.introduce());
 
