function vacation(input) {
  let moneyNeeded = Number(input[0]);
  let moneyHave = Number(input[1]);
  let index = 2;
  let action = input[index];
  index++;
  let sum = Number(input[index]);
  index++;
  let daysCounter = 0;
  let daysSpending = 0;

  while (moneyHave < moneyNeeded) {
    if (action === "spend") {
      moneyHave -= sum;
      daysSpending++;
      if (moneyHave < 0) {
        moneyHave = 0;
      }
    } else if (action === "save") {
      moneyHave += sum;
      daysSpending = 0;
    }
    daysCounter++;

    if (daysSpending === 5) {
      console.log(`You can't save the money.`);
      console.log(`${daysCounter}`);
      break;
    }

    action = input[index];
    index++;
    sum = Number(input[index]);
    index++;
  }

  if (moneyHave >= moneyNeeded) {
    console.log(`You saved the money for ${daysCounter} days.`);
  }
}
vacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
