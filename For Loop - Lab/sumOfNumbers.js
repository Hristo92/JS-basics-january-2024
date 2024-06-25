function sumOfNumbers(input) {
  let num = input[0];
  let sum = 0;

  for (let index = 0; index < num.length; index++) {
    let element = Number(num[index]);
    sum += element;
  }
  console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"]);
