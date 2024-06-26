function tennisRanklist(input) {
  let tournaments = Number(input[0]);
  let startPoints = Number(input[1]);
  let additionalPoints = 0;
  let wonTournaments = 0;

  for (let index = 2; index < input.length; index++) {
    let element = input[index];

    if (element === "W") {
      additionalPoints += 2000;
      wonTournaments++;
    } else if (element === "F") {
      additionalPoints += 1200;
    } else if (element === "SF") {
      additionalPoints += 720;
    }
  }

  let totalPoints = startPoints + additionalPoints;
  let averagePoints = Math.floor(additionalPoints / tournaments);
  let wonTournamentsPercent = (wonTournaments / tournaments) * 100;

  console.log(`Final points: ${totalPoints}`);
  console.log(`Average points: ${averagePoints}`);
  console.log(`${wonTournamentsPercent.toFixed(2)}%`);
}
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W"]);
