function walking(input) {
  let index = 0;
  let command = input[index];
  index++;
  let totalSteps = 0;

  while (command !== "Going home") {
    let dailySteps = Number(command);
    totalSteps += dailySteps;

    if (totalSteps >= 10000) {
      let stepsOver = totalSteps - 10000;
      console.log("Goal reached! Good job!");
      console.log(`${stepsOver} steps over the goal!`);
      return;
    }

    command = input[index];
    index++;
  }

  command = Number(input[index]);
  totalSteps += command;

  if (totalSteps < 10000) {
    let stepsUnder = 10000 - totalSteps;
    console.log(`${stepsUnder} more steps to reach goal.`);
  } else {
    let stepsOver = totalSteps - 10000;
    console.log("Goal reached! Good job!");
    console.log(`${stepsOver} steps over the goal!`);
  }
}
walking(["125", "250", "4000", "30", "2678", "4682"]);
