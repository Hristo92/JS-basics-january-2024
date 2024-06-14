function housePainting(input) {
  let houseHeigth = Number(input[0]);
  let houseLength = Number(input[1]);
  let roofWallHeigth = Number(input[2]);

  let frontAndBackWallsWithDoor = houseHeigth * houseHeigth * 2;
  let door = 1.2 * 2;
  let frontAndBackWallsWithoutDoor = frontAndBackWallsWithDoor - door;
  let sideWallsWithWindows = houseHeigth * houseLength * 2;
  let windows = 1.5 * 1.5;
  let sideWallsWithoutWindows = sideWallsWithWindows - windows * 2;
  let totalSpaceWalls = frontAndBackWallsWithoutDoor + sideWallsWithoutWindows;

  let sidesOfTheRoof = houseHeigth * houseLength * 2;
  let frontAndBackOfTheRoof = ((houseHeigth * roofWallHeigth) / 2) * 2;
  let totalSpaceRoof = sidesOfTheRoof + frontAndBackOfTheRoof;

  let greenPaint = totalSpaceWalls / 3.4;
  let redPaint = totalSpaceRoof / 4.3;

  console.log(greenPaint.toFixed(2));
  console.log(redPaint.toFixed(2));
}
housePainting(["6", "10", "5.2"]);
