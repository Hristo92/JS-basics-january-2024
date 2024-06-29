function coins(input) {
  let change = Math.floor(Number(input[0]) * 100);
  let coin1 = 0;
  let coin2 = 0;
  let coin5 = 0;
  let coin10 = 0;
  let coin20 = 0;
  let coin50 = 0;
  let coin100 = 0;
  let coin200 = 0;

  while (change >= 0) {
    if (change >= 200) {
      coin200++;
      change -= 200;
    } else if (change >= 100) {
      coin100++;
      change -= 100;
    } else if (change >= 50) {
      coin50++;
      change -= 50;
    } else if (change >= 20) {
      coin20++;
      change -= 20;
    } else if (change >= 10) {
      coin10++;
      change -= 10;
    } else if (change >= 5) {
      coin5++;
      change -= 5;
    } else if (change >= 2) {
      coin2++;
      change -= 2;
    } else if (change >= 1) {
      coin1++;
      change -= 1;
    }

    if (change === 0) {
      break;
    }
  }

  let coinsCount =
    coin1 + coin2 + coin5 + coin10 + coin20 + coin50 + coin100 + coin200;

  console.log(coinsCount);
}
coins(["0.56"]);
