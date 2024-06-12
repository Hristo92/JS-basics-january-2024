function petShop(input) {
  let dogFood = input[0];
  let catFood = input[1];

  let dogFoodPrice = dogFood * 2.5;
  let catFoodPrice = catFood * 4;

  let total = dogFoodPrice + catFoodPrice;

  console.log(`${total} lv.`);
}
petShop(["13", "9"]);
