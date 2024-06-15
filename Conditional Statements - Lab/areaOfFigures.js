function areaOfFigures(input) {
  let figure = input[0];
  let a = Number(input[1]);
  let area = 0;

  if (figure === "square") {
    area = a * a;
  } else if (figure === "rectangle") {
    let b = Number(input[2]);
    area = a * b;
  } else if (figure === "circle") {
    area = Math.PI * a * a;
  } else if (figure === "triangle") {
    let b = Number(input[2]);
    area = (a * b) / 2;
  }

  console.log(area.toFixed(3));
}
areaOfFigures(["triangle", "4.5", "20"]);
