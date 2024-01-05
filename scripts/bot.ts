import playwright from "playwright";
import loginToAccount from "./login";

const goToNextPost = async (page: any) => {
  const buttonNext = await page.$('svg[aria-label="Далее"]');

  buttonNext.click();

  console.log("Перешел на следующий пост");
};

const likePost = async (page: any) => {
  const buttonLike = await page.$('svg[aria-label="Нравится"]');

  await buttonLike.click();

  console.log("лайкнул пост");
};

const bot = async (login: string, password: string, tag: string) => {
  const browser = await playwright.chromium.launch({
    headless: false, // setting this to true will not run the UI
  });

  const page = await browser.newPage();

  await page.goto("https://www.instagram.com");

  await page.waitForTimeout(1000);

  console.log("зашел в инстаграмм");

  await loginToAccount(page, login, password, console.log);

  await page.waitForTimeout(10000);

  await page.goto(`https://www.instagram.com/explore/tags/${tag}/`);

  console.log("перешел на страницу хештега");

  await page.waitForTimeout(5000);

  const postLinks = await page.$$('a[role="link"]');

  await postLinks[11].click();

  console.log("открыл страницу поста");

  await page.waitForTimeout(5000);

  for (let i = 0; i < postLinks.length - 11; i++) {
    await likePost(page);

    await page.waitForTimeout(1000);

    await goToNextPost(page);

    await page.waitForTimeout(1000);
  }

  await page.waitForTimeout(100000); // wait for 5 seconds
  await browser.close();

  return "Операция прошла успешно";
};

export default bot;
