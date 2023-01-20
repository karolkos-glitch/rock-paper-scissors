import type { Page } from "@playwright/test";

const visitMainPage = async (page: Page) => {
  await page.goto('http://127.0.0.1:5173/');
}

export default visitMainPage;