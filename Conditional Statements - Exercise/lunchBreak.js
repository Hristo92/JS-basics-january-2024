function lunchBreak(input) {
  let movieName = input[0];
  let episodeTime = Number(input[1]);
  let breakTime = Number(input[2]);

  let lunchTime = breakTime * (1 / 8);
  let leisureTime = breakTime * (1 / 4);
  let totalTimeForBreak = lunchTime + leisureTime;
  let timeLeft = breakTime - totalTimeForBreak;

  if (timeLeft >= episodeTime) {
    let timeOver = Math.ceil(timeLeft - episodeTime);
    console.log(
      `You have enough time to watch ${movieName} and left with ${timeOver} minutes free time.`
    );
  } else {
    let timeNeeded = Math.ceil(episodeTime - timeLeft);
    console.log(
      `You don't have enough time to watch ${movieName}, you need ${timeNeeded} more minutes.`
    );
  }
}
lunchBreak(["Teen Wolf", "48", "60"]);
