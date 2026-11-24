import { expect, test } from "@playwright/test";

test.describe("performance", () => {
  test("hero is immediately available without loading gate", async ({
    page,
  }) => {
    await page.goto("/en/", { waitUntil: "domcontentloaded" });

    await expect(page.getByRole("status")).toHaveCount(0);
    await expect(page.locator("#home h1")).toBeVisible();
  });

  test("meets conservative navigation timing budgets", async ({ page }) => {
    await page.goto("/en/", { waitUntil: "load" });
    await page.locator("#home h1").waitFor({ state: "visible" });

    const metrics = await page.evaluate(() => {
      const nav = performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming | undefined;

      if (!nav) {
        return null;
      }

      return {
        domContentLoaded:
          nav.domContentLoadedEventEnd - nav.startTime,
        loadEvent: nav.loadEventEnd - nav.startTime,
        responseEnd: nav.responseEnd - nav.startTime,
      };
    });

    expect(metrics).not.toBeNull();
    expect(metrics!.responseEnd).toBeLessThan(3_000);
    expect(metrics!.domContentLoaded).toBeLessThan(4_000);
    expect(metrics!.loadEvent).toBeLessThan(6_000);
  });

  test("records a reasonable LCP when available", async ({ page }) => {
    await page.goto("/en/", { waitUntil: "networkidle" });

    const lcp = await page.evaluate(async () => {
      return await new Promise<number | null>((resolve) => {
        let last = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const latest = entries[entries.length - 1];
          if (latest) last = latest.startTime;
        });

        try {
          observer.observe({
            type: "largest-contentful-paint",
            buffered: true,
          } as PerformanceObserverInit);
        } catch {
          resolve(null);
          return;
        }

        setTimeout(() => {
          observer.disconnect();
          resolve(last || null);
        }, 2_000);
      });
    });

    if (lcp !== null) {
      expect(lcp).toBeLessThan(4_000);
    }
  });
});
