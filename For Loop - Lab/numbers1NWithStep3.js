function numbers1NWithStep3(input) {
  let num = Number(input[0]);

  for (let index = 1; index <= num; index += 3) {
    console.log(index);
  }
}
numbers1NWithStep3(["7"]);
