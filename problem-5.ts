interface Student {
  name: string;
  age: number;
  grades: number[];
}

function calculateAverageGrade(student: Student): number {
  const sum = student.grades.reduce((num, current) => num + current, 0);

  return sum / student.grades.length;
}

console.log(
  calculateAverageGrade({
    name: "Neaz",
    age: 25,
    grades: [2, 4, 3.45, 7],
  })
);
