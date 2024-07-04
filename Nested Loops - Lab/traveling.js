function traveling(input) {
  let index = 0;
  let destination = input[index];
  index++;
  let budget = Number(input[index]);
  index++;
  let totalMoney = 0;

  while (destination !== "End") {
    while (totalMoney < budget) {
      let moneySaved = Number(input[index]);
      totalMoney += moneySaved;
      index++;
      if (totalMoney >= budget) {
        console.log(`Going to ${destination}!`);
        totalMoney = 0;
        break;
      }
    }

    destination = input[index];
    index++;
    budget = Number(input[index]);
    index++;
  }
}
traveling([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
]);
