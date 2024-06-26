function cleverLily(input) {
  let age = Number(input[0]);
  let washingMachinePrice = Number(input[1]);
  let pricePerToy = Number(input[2]);

  let toys = 0;
  let money = 0;

  for (let index = 1; index <= age; index++) {
    if (index % 2 === 0) {
      money += index * 5 - 1;
    } else {
      toys++;
    }
  }

  let toysMoney = toys * pricePerToy;
  let totalMoney = toysMoney + money;

  if (totalMoney >= washingMachinePrice) {
    let moneyLeft = totalMoney - washingMachinePrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else {
    let moneyNeeded = washingMachinePrice - totalMoney;
    console.log(`No! ${moneyNeeded.toFixed(2)}`);
  }
}
cleverLily(["21", "1570.98", "3"]);
