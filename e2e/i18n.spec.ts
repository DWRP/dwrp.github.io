import { expect, test } from "@playwright/test";

const locales = [
  { path: "/en/", lang: "en", hero: /Senior Fullstack Developer/i },
  {
    path: "/pt-BR/",
    lang: "pt-BR",
    hero: /Desenvolvedor Fullstack/i,
  },
  { path: "/es/", lang: "es", hero: /Desarrollador Fullstack/i },
  { path: "/zh-CN/", lang: "zh-CN", hero: /全栈/ },
] as const;

test.describe("i18n", () => {
  for (const locale of locales) {
    test(`${locale.path} renders localized content without loading spinner`, async ({
      page,
    }) => {
      await page.goto(locale.path);

      await expect(page.locator("html")).toHaveAttribute("lang", locale.lang);
      await expect(page.getByRole("status")).toHaveCount(0);
      await expect(page.locator("#home")).toBeVisible();
      await expect(page.locator("#home")).toContainText(locale.hero);
    });
  }

  test("language switcher navigates to another locale URL", async ({
    page,
  }) => {
    await page.goto("/en/");

    await page.getByLabel("Language").click();
    await page.getByRole("option", { name: "Portuguese" }).click();

    await expect(page).toHaveURL(/\/pt-BR\/?/);
    await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  });

  test("root redirects to default locale", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL(/\/en\/?/);
  });
});
