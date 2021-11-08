class Members {
	constructor(name, age) {
		this.name = name,
		this.age = age,
		this.mycon = "little";
	}

	viewMember() {
		console.log(this.name + " age is " + this.age)
	}

}


class Student extends Members {
	constructor(name, age, roll, grade) {
		super(name, age)
		this.name = name,
		this.age = age,
		this.roll = roll,
		this.grade = grade
	}

	viewStudent() {
		console.log(this.name + " roll is " + this.roll + " and grade is " + this.grade);
	}

	set setGrade(newname) {
       this.name = newname;
	}

	get findAge() {
		return this.age;
	}
}


const wasif = new Student("Wasif", 21, 71, 3.5)

// wasif.setGrade = "Nobin";
// wasif.viewStudent()
// wasif.viewMember()
// console.log(wasif.findAge)
console.log(wasif.mycon);
