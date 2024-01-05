const loginToAccount = async (
  page: any,
  login: string,
  password: string,
  setData: (value: string) => void
) => {
  const usernameInput = await page.$('input[name="username"]');

  await usernameInput.fill(login);

  const passwordInput = await page.$('input[name="password"]');

  await passwordInput.fill(password);

  const confirmButton = await page.$('button[type="submit"]');

  await confirmButton.click();

  setData("авторизовался под выбранным профилем");
};

export default loginToAccount;
