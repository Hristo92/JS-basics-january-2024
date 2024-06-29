function examPreparation(input) {
  let badGrades = Number(input[0]);
  let index = 1;
  let taskName = input[index];
  index++;
  let grade = input[index];
  index++;
  let badGradesCounter = 0;
  let tasksCounter = 0;
  let totalScore = 0;
  let lastTask = "";

  while (taskName !== "Enough") {
    let gradeAsNum = Number(grade);
    if (gradeAsNum <= 4) {
      badGradesCounter++;
    }

    if (badGradesCounter >= badGrades) {
      console.log(`You need a break, ${badGradesCounter} poor grades.`);
      break;
    }

    totalScore += gradeAsNum;
    tasksCounter++;
    lastTask = taskName;

    taskName = input[index];
    index++;
    grade = input[index];
    index++;
  }

  let avgGrade = totalScore / tasksCounter;

  if (badGradesCounter < badGrades) {
    console.log(`Average score: ${avgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${tasksCounter}`);
    console.log(`Last problem: ${lastTask}`);
  }
}
examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Troy",
  "4.5",
  "Enough",
]);
