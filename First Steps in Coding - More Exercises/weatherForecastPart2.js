function weatherForecastPart2(input) {
  let degrees = input[0];
  let weather = "";

  if (degrees >= 26 && degrees <= 35) {
    weather += "Hot";
  } else if (degrees > 20 && degrees < 26) {
    weather += "Warm";
  } else if (degrees >= 15 && degrees <= 20) {
    weather += "Mild";
  } else if (degrees >= 12 && degrees < 15) {
    weather += "Cool";
  } else if (degrees >= 5 && degrees < 12) {
    weather += "Cold";
  } else {
    console.log("unknown");
  }

  console.log(weather);
}
weatherForecastPart2([0]);
