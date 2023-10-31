import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:1234");

  await expect(page).toHaveTitle(/Testing example/);
});

test("can add and subtract count", async ({ page }) => {
  await page.goto("http://localhost:1234");

  await expect(page.getByLabel("counter-value")).toHaveValue("0");

  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "+" }).click();

  await expect(page.getByLabel("counter-value")).toHaveValue("2");

  await page.getByRole("button", { name: "+" }).click();
  await page.getByRole("button", { name: "-" }).click();
  await page.getByRole("button", { name: "-" }).click();

  await expect(page.getByLabel("counter-value")).toHaveValue("1");
});
