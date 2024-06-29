function cake(input) {
  let cakeWidth = Number(input[0]);
  let cakeLength = Number(input[1]);
  let cakeSize = cakeWidth * cakeLength;
  let index = 2;
  let pieces = input[index];
  index++;
  let totalPieces = 0;

  while (pieces !== "STOP") {
    let piecesAsNumber = Number(pieces);
    totalPieces += piecesAsNumber;

    if (totalPieces > cakeSize) {
      break;
    }

    pieces = input[index];
    index++;
  }

  if (totalPieces <= cakeSize) {
    let piecesLeft = cakeSize - totalPieces;
    console.log(`${piecesLeft} pieces are left.`);
  } else {
    let piecesNeeded = totalPieces - cakeSize;
    console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
  }
}
cake(["10", "2", "2", "4", "6", "STOP"]);
