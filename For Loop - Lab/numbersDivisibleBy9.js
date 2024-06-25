function numbersDivisibleBy9(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let sum = 0;
  let output = "";

  for (let index = num1; index <= num2; index++) {
    if (index % 9 === 0) {
      sum += index;
      output += index + "\n";
    }
  }
  console.log(`The sum: ${sum}`);
  console.log(output);
}
numbersDivisibleBy9(["100", "200"]);
