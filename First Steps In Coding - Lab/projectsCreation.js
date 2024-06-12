function projectsCreation(input) {
  let architectName = input[0];
  let projectsCount = input[1];
  let hours = projectsCount * 3;

  console.log(
    `The architect ${architectName} will need ${hours} hours to complete ${projectsCount} project/s.`
  );
}
projectsCreation(["Ssanya ", "9"]);
