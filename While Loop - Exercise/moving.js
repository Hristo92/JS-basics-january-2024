function moving(input) {
  let spaceWidth = Number(input[0]);
  let spaceLength = Number(input[1]);
  let spaceHeight = Number(input[2]);
  let totalSpace = spaceWidth * spaceLength * spaceHeight;
  let index = 3;
  let boxes = input[index];
  index++;
  let totalBoxes = 0;

  while (boxes !== "Done") {
    let boxesAsNumber = Number(boxes);
    totalBoxes += boxesAsNumber;

    if (totalBoxes > totalSpace) {
      break;
    }

    boxes = input[index];
    index++;
  }

  if (totalBoxes <= totalSpace) {
    let spaceLeft = totalSpace - totalBoxes;
    console.log(`${spaceLeft} Cubic meters left.`);
  } else {
    let spaceNeeded = totalBoxes - totalSpace;
    console.log(
      `No more free space! You need ${spaceNeeded} Cubic meters more.`
    );
  }
}
moving(["10", "1", "2", "4", "6", "Done"]);
