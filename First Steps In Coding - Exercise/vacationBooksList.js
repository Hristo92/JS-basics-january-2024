function vacationBooksList(input) {
  let pagesInCurrentBook = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let daysPerBook = Number(input[2]);

  let totalHoursPerBook = pagesInCurrentBook / pagesPerHour;
  let hoursNeeded = totalHoursPerBook / daysPerBook;

  console.log(hoursNeeded);
}
vacationBooksList(["212 ", "20 ", "2 "]);
