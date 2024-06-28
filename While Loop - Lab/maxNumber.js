function maxNumber(input) {
  let index = 0;
  let command = input[index];
  index++;
  let minNum = Math.max();

  while (command !== "Stop") {
    let commandAsNum = Number(command);
    if (commandAsNum > minNum) {
      minNum = commandAsNum;
    }

    command = input[index];
    index++;
  }

  console.log(minNum);
}
maxNumber(["100", "99", "80", "70", "Stop"]);
