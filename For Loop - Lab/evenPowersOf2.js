function evenPowersOf2(input) {
  let num = Number(input[0]);

  for (let index = 0; index <= num; index++) {
    if (index % 2 === 0) {
      console.log(Math.pow(2, index));
    }
  }
}
evenPowersOf2(["7"]);
