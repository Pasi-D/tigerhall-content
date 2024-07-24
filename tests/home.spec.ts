import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should display the main heading", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    // Check if the heading is visible
    const heading = page.locator("text=Tigerhall podcasts");
    await expect(heading).toBeVisible();
  });

  test("should render PodcastList component", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    // Check if PodcastList component is present
    const podcastList = page.locator("data-testid=podcast-list");
    await expect(podcastList).toBeVisible();
  });
});
