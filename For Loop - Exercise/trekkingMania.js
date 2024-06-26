function trekkingMania(input) {
  let climbersGroupCount = Number(input[0]);
  let totalPeople = 0;

  let musala = 0;
  let monblan = 0;
  let kilimandjaro = 0;
  let k2 = 0;
  let everest = 0;

  for (let index = 1; index <= climbersGroupCount; index++) {
    let element = Number(input[index]);
    totalPeople += element;
    if (element <= 5) {
      musala += element;
    } else if (element >= 6 && element <= 12) {
      monblan += element;
    } else if (element >= 13 && element <= 25) {
      kilimandjaro += element;
    } else if (element >= 26 && element <= 40) {
      k2 += element;
    } else if (element >= 41) {
      everest += element;
    }
  }

  let musalaClimbersPercent = (musala / totalPeople) * 100;
  let monblanClimbersPercent = (monblan / totalPeople) * 100;
  let kilimandjaroClimbersPercent = (kilimandjaro / totalPeople) * 100;
  let k2ClimbersPercent = (k2 / totalPeople) * 100;
  let everestClimbersPercent = (everest / totalPeople) * 100;

  console.log(`${musalaClimbersPercent.toFixed(2)}%`);
  console.log(`${monblanClimbersPercent.toFixed(2)}%`);
  console.log(`${kilimandjaroClimbersPercent.toFixed(2)}%`);
  console.log(`${k2ClimbersPercent.toFixed(2)}%`);
  console.log(`${everestClimbersPercent.toFixed(2)}%`);
}
trekkingMania(["5", "25", "41", "31", "250", "6"]);
