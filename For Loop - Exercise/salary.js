function salary(input) {
  let salary = Number(input[1]);

  for (let index = 2; index < input.length; index++) {
    let element = input[index];

    if (element === "Facebook") {
      salary -= 150;
    } else if (element === "Instagram") {
      salary -= 100;
    } else if (element === "Reddit") {
      salary -= 50;
    } else {
      salary = salary;
    }

    if (salary <= 0) {
      console.log(`You have lost your salary.`);
      return;
    }
  }

  console.log(Math.trunc(salary));
}
salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
