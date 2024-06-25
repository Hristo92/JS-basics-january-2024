function vowelsSum(input) {
  let word = input[0];
  let sum = 0;

  for (let index = 0; index < word.length; index++) {
    let element = word[index];

    if (element === "a") {
      sum += 1;
    } else if (element === "e") {
      sum += 2;
    } else if (element === "i") {
      sum += 3;
    } else if (element === "o") {
      sum += 4;
    } else if (element === "u") {
      sum += 5;
    }
  }
  console.log(sum);
}
vowelsSum(["beer"]);
