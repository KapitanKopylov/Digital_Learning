class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    averageMark() {
        if (this.marks.length === 0) return 0;
        return this.marks.reduce((acc, val) => acc + val, 0) / this.marks.length;
    }
}

function shellSortByAverage(students) {
    let n = students.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = students[i];
            let j = i;

            while (j >= gap && students[j - gap].averageMark() > temp.averageMark()) {
                students[j] = students[j - gap];
                j -= gap;
            }

            students[j] = temp;
        }

        gap = Math.floor(gap / 2);
    }

    return students;
}

const students = [
    new Student("Иван", [5, 4, 5]),
    new Student("Мария", [3, 4, 2]),
    new Student("Алексей", [4, 4, 4]),
    new Student("Ольга", [5, 5, 5])
];

const sortedStudents = shellSortByAverage(students);

sortedStudents.forEach(s => {
    console.log(`${s.name}: средняя оценка ${s.averageMark().toFixed(2)}`);
});