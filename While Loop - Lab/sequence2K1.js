function sequence2K1(input) {
  let index = 0;
  let n = Number(input[index]);
  index++;

  let sum = 1;

  while (sum <= n) {
    console.log(sum);
    sum += sum + 1;
  }
}
sequence2K1(["17"]);
