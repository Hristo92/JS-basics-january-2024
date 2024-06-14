function fishland(input) {
  let mackerelPricePerKilo = Number(input[0]);
  let spratPricePerKilo = Number(input[1]);
  let bonitoKilos = Number(input[2]);
  let safridKilos = Number(input[3]);
  let musselsKilos = Number(input[4]);

  let bonitosPrice = mackerelPricePerKilo + mackerelPricePerKilo * 0.6;
  let safridPrice = spratPricePerKilo + spratPricePerKilo * 0.8;

  let bonitosCost = bonitosPrice * bonitoKilos;
  let safridCost = safridPrice * safridKilos;
  let musselsCost = musselsKilos * 7.5;

  let totalCost = bonitosCost + safridCost + musselsCost;

  console.log(totalCost.toFixed(2));
}
fishland(["6.90", "4.20", "1.5", "2.5", "1"]);
