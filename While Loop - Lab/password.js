function password(input) {
  let username = input[0];
  let pass = input[1];
  let index = 2;
  let password = input[index];
  index++;

  while (password !== pass) {
    password = input[index];
    index++;
  }

  if (password === pass) {
    console.log(`Welcome ${username}!`);
  }
}
password(["Nakov", "1234", "Pass", "1324", "1234"]);
