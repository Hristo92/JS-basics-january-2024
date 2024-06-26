function oscars(input) {
  let actorsName = input[0];
  let academyPoints = Number(input[1]);
  let juryCount = Number(input[2]);

  let awardedPoints = 0;
  let totalPoints = 0;

  for (let index = 3; index < input.length; index += 2) {
    let name = input[index];
    let points = input[index + 1];

    let nameLength = name.length;
    awardedPoints += (nameLength * points) / 2;

    if (academyPoints + awardedPoints >= 1250.5) {
      console.log(
        `Congratulations, ${actorsName} got a nominee for leading role with ${(
          academyPoints + awardedPoints
        ).toFixed(1)}!`
      );
      return;
    }
  }

  totalPoints = awardedPoints + academyPoints;

  if (totalPoints >= 1250.5) {
    console.log(
      `Congratulations, ${actorsName} got a nominee for leading role with ${totalPoints.toFixed(
        1
      )}!`
    );
  } else {
    let pointsNeeded = 1250.5 - totalPoints;
    console.log(
      `Sorry, ${actorsName} you need ${pointsNeeded.toFixed(1)} more!`
    );
  }
}
oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
