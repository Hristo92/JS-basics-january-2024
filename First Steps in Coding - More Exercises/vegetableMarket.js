function vegetableMarket(input) {
  let vegetablePricePerKilo = Number(input[0]);
  let fruitsPricePerKilo = Number(input[1]);
  let vegetableKilos = Number(input[2]);
  let fruitsKilos = Number(input[3]);

  let vegetablesCost = vegetableKilos * vegetablePricePerKilo;
  let fruitsCost = fruitsKilos * fruitsPricePerKilo;
  let totalCostInEuro = (vegetablesCost + fruitsCost) / 1.94;

  console.log(totalCostInEuro.toFixed(2));
}
vegetableMarket(["0.194", "19.4", "10", "10"]);
