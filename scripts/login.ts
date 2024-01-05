const loginToAccount = async (
  page: any,
  login: string,
  password: string,
) => {
  const usernameInput = await page.$('input[name="username"]');

  await usernameInput.fill(login);

  const passwordInput = await page.$('input[name="password"]');

  await passwordInput.fill(password);

  const confirmButton = await page.$('button[type="submit"]');

  await confirmButton.click();

  console.log("авторизовался под выбранным профилем");
};

export default loginToAccount;
