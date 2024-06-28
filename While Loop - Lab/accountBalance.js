function accountBalance(input) {
  let index = 0;
  let command = input[index];
  index++;
  let total = 0;

  while (command !== "NoMoreMoney") {
    let commandAsNum = Number(command);

    if (commandAsNum < 0) {
      console.log("Invalid operation!");
      break;
    }
    console.log(`Increase: ${commandAsNum.toFixed(2)}`);

    total += commandAsNum;
    command = input[index];
    index++;
  }

  console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
