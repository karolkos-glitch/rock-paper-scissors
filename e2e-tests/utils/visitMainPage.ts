import type { Page } from "@playwright/test";

const visitMainPage = async (page: Page, baseURL?: string) => {
  await page.goto(baseURL || "");
}

export default visitMainPage;