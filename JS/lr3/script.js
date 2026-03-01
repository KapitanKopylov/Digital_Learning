const studentJSON = {
    lastName: "Иванов",
    firstName: "Иван",
    marks: [
        { subject: "Математика", mark: 5 },
        { subject: "Физика", mark: 4 },
        { subject: "Информатика", mark: 5 }
    ]
};

function printStudentInfo(student) {
    console.log(`Фамилия: ${student.lastName}`);
    console.log(`Имя: ${student.firstName}`);
    console.log("Оценки:");
    student.marks.forEach(m => {
        console.log(`${m.subject}: ${m.mark}`);
    });
}

printStudentInfo(studentJSON);

class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark;
    }
}

class Student {
    constructor(lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.marks = [];
    }

    addMark(subject, mark) {
        this.marks.push(new Mark(subject, mark));
    }

    averageMark() {
        if (this.marks.length === 0) return 0;
        const sum = this.marks.reduce((acc, m) => acc + m.mark, 0);
        return sum / this.marks.length;
    }

    getMarksBySubject(subject) {
        return this.marks.filter(m => m.subject === subject).map(m => m.mark).join();
    }

    removeMarksBySubject(subject) {
        this.marks = this.marks.filter(m => m.subject !== subject);
        console.log(`Удалены оценки по предмету ${subject}`);
    }

    printInfo() {
        console.log(`Фамилия: ${this.lastName}`);
        console.log(`Имя: ${this.firstName}`);
        console.log("Оценки:");
        this.marks.forEach(m => console.log(`${m.subject}: ${m.mark}`));
    }
}

const student = new Student("Иванов", "Иван");

student.addMark("Математика", 5);
student.addMark("Физика", 4);
student.addMark("Информатика", 5);
student.addMark("Математика", 3);

student.printInfo();
console.log("Средняя оценка:", student.averageMark());
console.log("Оценки по Математике:", student.getMarksBySubject("Математика"));
student.removeMarksBySubject("Физика");
student.printInfo();
student.removeMarksBySubject("Математика");
student.printInfo();