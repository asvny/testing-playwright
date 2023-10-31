import { test, expect } from "@playwright/experimental-ct-react";
import AxeBuilder from "@axe-core/playwright";
import * as React from "react";
import { CounterForTest } from "../counter.story";

test("counter component has no a11y violations", async ({ mount }) => {
  const component = await mount(<CounterForTest />);

  const page = await component.page();
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test("can render counter component", async ({ mount }) => {
  const component = await mount(<CounterForTest />);

  await expect(component.getByLabel("counter-value")).toHaveValue("0");

  await component.getByRole("button", { name: "+" }).click();

  await expect(component.getByLabel("counter-value")).toHaveValue("1");

  await component.getByRole("button", { name: "+" }).click();
  await component.getByRole("button", { name: "-" }).click();
  await component.getByRole("button", { name: "-" }).click();

  await expect(component.getByLabel("counter-value")).toHaveValue("0");
});
