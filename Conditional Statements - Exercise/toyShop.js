function toyShop(input) {
  let holidayPrice = Number(input[0]);
  let puzzlesCount = Number(input[1]);
  let dollsCount = Number(input[2]);
  let bearsCount = Number(input[3]);
  let minionsCount = Number(input[4]);
  let trucksCount = Number(input[5]);

  let puzzlesCost = puzzlesCount * 2.6;
  let dollsCost = dollsCount * 3;
  let bearsCost = bearsCount * 4.1;
  let minionsCost = minionsCount * 8.2;
  let trucksCost = trucksCount * 2;

  let totalMoney =
    puzzlesCost + dollsCost + bearsCost + minionsCost + trucksCost;
  let totalToys =
    puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;

  if (totalToys >= 50) {
    totalMoney -= totalMoney * 0.25;
  }

  totalMoney -= totalMoney * 0.1;

  if (totalMoney >= holidayPrice) {
    let moneyLeft = totalMoney - holidayPrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
  } else {
    let moneyNeeded = holidayPrice - totalMoney;
    console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
  }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);
