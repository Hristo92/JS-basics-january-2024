function trainingLab(input) {
  let lengthInMeters = Number(input[0]);
  let widthInMeters = Number(input[1]);

  let lengthInCm = lengthInMeters * 100;
  let widthInCm = widthInMeters * 100;
  let widthWithoutCorridor = widthInCm - 100;
  let desks = Math.floor(widthWithoutCorridor / 70);
  let rows = Math.floor(lengthInCm / 120);
  let seatsCount = desks * rows - 3;
  console.log(seatsCount);
}
trainingLab(["8.4", "5.2"]);
