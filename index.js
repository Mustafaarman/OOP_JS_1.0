console.log("hello world");

const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 2
	},
	draw: function() {
		console.log(this.radius);
	}
}

circle.draw();


function Student(roll, grade) {
	this.roll = roll,
	this.grade = grade,
	this.viewStudent = function () {
		console.log("roll is " + this.roll + "and grade is " + this.grade)
	}
}

const one = new Student(72, 3.5);
one.viewStudent()