function fishTank(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let heigth = Number(input[2]);
  let percent = Number(input[3]);

  let tanksVolume = Math.ceil(length * width * heigth);
  let volumeInLiters = tanksVolume / 1000;
  let litersNeeded = volumeInLiters * (1 - percent / 100);

  console.log(litersNeeded);
}
fishTank(["85 ", "75 ", "47 ", "17 "]);
