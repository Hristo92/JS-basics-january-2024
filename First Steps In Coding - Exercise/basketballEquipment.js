function basketballEquipment(input) {
  let yearlyTrainingFee = Number(input[0]);

  let sneakersPrice = yearlyTrainingFee - yearlyTrainingFee * 0.4;
  let trackSuitPrice = sneakersPrice - sneakersPrice * 0.2;
  let basketBallPrice = trackSuitPrice / 4;
  let accessoriesPrice = basketBallPrice / 5;

  let totalCost =
    sneakersPrice +
    trackSuitPrice +
    basketBallPrice +
    accessoriesPrice +
    yearlyTrainingFee;

  console.log(totalCost);
}
basketballEquipment(["365"]);
