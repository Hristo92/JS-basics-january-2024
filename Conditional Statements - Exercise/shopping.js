function shopping(input) {
  let budget = Number(input[0]);
  let videoCardsCount = Number(input[1]);
  let proccesorsCount = Number(input[2]);
  let ramCount = Number(input[3]);

  let videoCardsCost = videoCardsCount * 250;
  let proccesorsCost = proccesorsCount * (videoCardsCost * 0.35);
  let ramCost = ramCount * (videoCardsCost * 0.1);

  let totalCost = videoCardsCost + proccesorsCost + ramCost;

  if (videoCardsCount > proccesorsCount) {
    totalCost -= totalCost * 0.15;
  }

  if (totalCost <= budget) {
    let moneyLeft = budget - totalCost;
    console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
  } else {
    let moneyNeeded = totalCost - budget;
    console.log(
      `Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`
    );
  }
}
shopping(["920.45", "3", "1", "1"]);
