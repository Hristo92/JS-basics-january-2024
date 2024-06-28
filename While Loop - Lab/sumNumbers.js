function sumNumbers(input) {
  let goalNumber = Number(input[0]);
  let sum = 0;
  let index = 1;
  let num = Number(input[index]);
  index++;

  while (sum < goalNumber) {
    sum += num;

    num = Number(input[index]);
    index++;
  }

  console.log(sum);
}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
