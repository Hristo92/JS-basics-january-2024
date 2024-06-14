function celsiusToFahrenheit(input) {
  let degreesCelsium = Number(input[0]);

  let degreesInFarenheit = (degreesCelsium * 9) / 5 + 32;

  console.log(degreesInFarenheit.toFixed(2));
}
celsiusToFahrenheit(["25"]);
