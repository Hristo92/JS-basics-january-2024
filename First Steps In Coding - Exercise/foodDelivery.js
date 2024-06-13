function foodDelivery(input) {
  let chickenMenu = Number(input[0]);
  let fishMenu = Number(input[1]);
  let vegetarianMenu = Number(input[2]);

  let chickenMenuCost = chickenMenu * 10.35;
  let fishMenuCost = fishMenu * 12.4;
  let vegetarianMenuCost = vegetarianMenu * 8.15;

  let totalCostForMenusWithoutDelivery =
    chickenMenuCost + fishMenuCost + vegetarianMenuCost;

  let desertCost = totalCostForMenusWithoutDelivery * 0.2;

  let total = totalCostForMenusWithoutDelivery + desertCost + 2.5;

  console.log(total);
}
foodDelivery(["2 ", "4 ", "3 "]);
