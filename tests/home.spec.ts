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

  test("should display the search bar", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    // Check if the search bar is visible
    const searchBar = page.locator('input[placeholder="Search.."]');
    await expect(searchBar).toBeVisible();
  });

  test("should display loading skeletons while fetching data", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    // Check if loading skeletons are visible initially
    const skeletons = page.locator("data-testid=skeleton-card");
    await expect(skeletons.first()).toBeVisible();
  });

  test("should display podcasts after data is fetched", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    // Wait for the podcasts to be loaded and displayed
    const podcastCard = page.locator("data-testid=podcast-card");
    await expect(podcastCard.first()).toBeVisible();
  });

  test("should load more podcasts when scrolled to the bottom", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    // Initial check to ensure podcasts are loaded
    const podcastCard = page.locator("data-testid=podcast-card");
    await expect(podcastCard.first()).toBeVisible();

    // Count initial number of podcast cards
    const initialCount = await podcastCard.count();

    // Scroll to the bottom to trigger fetchMorePodcasts
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Wait for a reasonable amount of time to let new podcasts load
    await page.waitForTimeout(2000);

    // Check if more podcasts are loaded by counting again
    const finalCount = await podcastCard.count();
    await expect(finalCount).toBeGreaterThan(initialCount);
  });
});
