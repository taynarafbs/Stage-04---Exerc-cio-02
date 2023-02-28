let students = [
  { name: "Marco", grade1: 2, grade2: 3 },
  { name: "Cristian", grade1: 9, grade2: 6 },
  { name: "Lucy", grade1: 9, grade2: 8 },
  { name: "Mary", grade1: 5, grade2: 7 },
];


function CheckSuccessOrNot(student) {
  let average = (student.grade1 + student.grade2) / 2;
  let result = average >= 7;
  let message = "A média do(a) aluno(a) " + student.name + " é: " + average;

  if (result) {
    alert(message + "\nParabéns, " + student.name + "! Você foi aprovado(a) no concurso!");
  } else {
    alert(message + "\nNão foi dessa vez, " + student.name + "! Tente novamente!");
  }
}


students.forEach(CheckSuccessOrNot);