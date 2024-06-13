function depositCalculator(input) {
  let depositSum = Number(input[0]);
  let depositTimeInMonths = Number(input[1]);
  let interestRate = Number(input[2]);

  let totalInterest = (depositSum * interestRate) / 100;
  let interestPerMonth = totalInterest / 12;

  let sum = depositSum + depositTimeInMonths * interestPerMonth;

  console.log(sum);
}
depositCalculator(["200 ", "3 ", "5.7 "]);
