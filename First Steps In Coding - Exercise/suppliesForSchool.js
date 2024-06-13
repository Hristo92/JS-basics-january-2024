function suppliesForSchool(input) {
  let pens = Number(input[0]);
  let markers = Number(input[1]);
  let litersDetergent = Number(input[2]);
  let discountPercent = Number(input[3]);

  let pensPrice = pens * 5.8;
  let markersPrice = markers * 7.2;
  let detergentPrice = litersDetergent * 1.2;

  let totalSumForProducts = pensPrice + markersPrice + detergentPrice;
  let discount = (totalSumForProducts * discountPercent) / 100;

  let moneyNeeded = totalSumForProducts - discount;

  console.log(moneyNeeded);
}
suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);
