function oldBooks(input) {
  let mainBook = input[0];

  let index = 1;
  let books = input[index];
  index++;
  let counter = 0;

  while (books !== "No More Books") {
    if (books === mainBook) {
      console.log(`You checked ${counter} books and found it.`);
      break;
    }

    counter++;
    books = input[index];
    index++;
  }

  if (books !== mainBook) {
    console.log("The book you search is not here!");
    console.log(`You checked ${counter} books.`);
  }
}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
