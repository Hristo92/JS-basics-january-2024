function time15Minutes(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let hoursInMinutes = hours * 60;
  let totalTimeInMinutes = hoursInMinutes + minutes + 15;
  let timeInMinutes = totalTimeInMinutes % 60;
  let totalHours = Math.floor(totalTimeInMinutes / 60);

  if (totalHours > 23) {
    totalHours = 0;
  }

  if (timeInMinutes < 10) {
    console.log(`${totalHours}:0${timeInMinutes}`);
  } else {
    console.log(`${totalHours}:${timeInMinutes}`);
  }
}
time15Minutes(["1", "46"]);
