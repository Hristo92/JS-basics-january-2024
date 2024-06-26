function histogram(input) {
  let nums = Number(input[0]);

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let index = 1; index <= nums; index++) {
    let element = Number(input[index]);

    if (element < 200) {
      p1++;
    } else if (element >= 200 && element < 400) {
      p2++;
    } else if (element >= 400 && element < 600) {
      p3++;
    } else if (element >= 600 && element < 800) {
      p4++;
    } else if (element >= 800) {
      p5++;
    }
  }

  let p1Percent = (p1 / nums) * 100;
  let p2Percent = (p2 / nums) * 100;
  let p3Percent = (p3 / nums) * 100;
  let p4Percent = (p4 / nums) * 100;
  let p5Percent = (p5 / nums) * 100;

  console.log(`${p1Percent.toFixed(2)}%`);
  console.log(`${p2Percent.toFixed(2)}%`);
  console.log(`${p3Percent.toFixed(2)}%`);
  console.log(`${p4Percent.toFixed(2)}%`);
  console.log(`${p5Percent.toFixed(2)}%`);
}
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
