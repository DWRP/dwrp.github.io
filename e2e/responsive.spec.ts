import { expect, test, type Page } from "@playwright/test";

const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
] as const;

async function assertNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
    };
  });

  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
}

test.describe("responsive", () => {
  for (const viewport of viewports) {
    test(`${viewport.name} shows key sections without horizontal overflow`, async ({
      page,
    }) => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
      await page.goto("/en/");

      await expect(page.locator("#home")).toBeVisible();
      await expect(page.locator("#about")).toBeVisible();
      await expect(page.locator("#contact")).toBeVisible();
      await assertNoHorizontalOverflow(page);
    });
  }

  test("mobile navigation opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/en/");

    const openButton = page.getByRole("button", { name: "Open menu" });
    await expect(openButton).toBeVisible();
    await openButton.click();

    const dialog = page.getByRole("dialog", { name: "Mobile navigation" });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("link", { name: /about/i })).toBeVisible();

    await page.getByRole("button", { name: "Close menu" }).first().click();
    await expect(dialog).toBeHidden();
  });
});
