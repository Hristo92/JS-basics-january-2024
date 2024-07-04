function sumOfTwoNumbers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNum = Number(input[2]);
  let combinations = 0;
  let sum = 0;

  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      sum = i + j;
      combinations++;
      if (sum === magicNum) {
        console.log(
          `Combination N:${combinations} (${i} + ${j} = ${magicNum})`
        );
        return;
      }
    }
  }
  if (sum !== magicNum) {
    console.log(`${combinations} combinations - neither equals ${magicNum}`);
  }
}
sumOfTwoNumbers(["23", "24", "20"]);
