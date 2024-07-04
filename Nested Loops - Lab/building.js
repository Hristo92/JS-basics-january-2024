function building(input) {
  let floors = Number(input[0]);
  let rooms = Number(input[1]);
  let list = "";

  for (let i = floors; i > 0; i--) {
    for (let j = 0; j < rooms; j++) {
      if (i === floors) {
        list += "L" + i + j + " ";
      } else if (i % 2 === 1) {
        list += "A" + i + j + " ";
      } else if (i % 2 === 0) {
        list += "O" + i + j + " ";
      }
    }
    console.log(list);
    list = "";
  }
}
building(["4", "4"]);
