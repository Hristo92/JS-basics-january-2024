function worldSwimmingRecord(input) {
  let recordInSeconds = Number(input[0]);
  let distanceInMeters = Number(input[1]);
  let secondsPerMeterSwim = Number(input[2]);

  let totalTimeInSeconds = distanceInMeters * secondsPerMeterSwim;
  let totalAddedSeconds = Math.floor(distanceInMeters / 15) * 12.5;
  let totalSeconds = totalTimeInSeconds + totalAddedSeconds;

  if (totalSeconds < recordInSeconds) {
    console.log(
      `Yes, he succeeded! The new world record is ${totalSeconds.toFixed(
        2
      )} seconds.`
    );
  } else if (totalSeconds >= recordInSeconds) {
    let secondsNeeded = Math.abs(recordInSeconds - totalSeconds);
    console.log(
      `No, he failed! He was ${secondsNeeded.toFixed(2)} seconds slower.`
    );
  }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
