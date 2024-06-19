function godzillaVsKong(input) {
  let movieBudget = Number(input[0]);
  let statistCount = Number(input[1]);
  let suitPricePerOneStatist = Number(input[2]);

  let decorPrice = movieBudget * 0.1;

  if (statistCount > 150) {
    suitPricePerOneStatist -= suitPricePerOneStatist * 0.1;
  }
  let totalSuitCost = statistCount * suitPricePerOneStatist;
  let totalMoney = decorPrice + totalSuitCost;

  if (totalMoney > movieBudget) {
    let moneyNeeded = Math.abs(movieBudget - totalMoney);
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
  } else {
    let moneyLeft = Math.abs(totalMoney - movieBudget);
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`
    );
  }
}
godzillaVsKong(["9587.88", "222", "55.68"]);
