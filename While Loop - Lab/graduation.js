function graduation(input) {
  let name = input[0];
  let index = 1;
  let grade = Number(input[index]);
  index++;
  let years = 1;
  let grades = 0;
  let totalGrade = 0;

  while (years <= 12) {
    if (grade >= 4) {
      years++;
      grades++;
    } else {
      console.log(`${name} has been excluded at ${years} grade`);
      break;
    }

    totalGrade += grade;

    grade = Number(input[index]);
    index++;
  }

  let avgGrade = totalGrade / grades;

  if (grades === 12) {
    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
  }
}
graduation([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
