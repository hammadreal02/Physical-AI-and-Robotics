import { test, expect } from '@playwright/test';

test.describe('Mobile Responsiveness', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should show mobile navigation toggle on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE size

    const mobileNavToggle = page.locator('.navbar__toggle');
    await expect(mobileNavToggle).toBeVisible();

    // Check if the sidebar is initially closed
    const sidebar = page.locator('.doc-sidebar');
    await expect(sidebar).not.toBeVisible();

    // Click to open the mobile sidebar
    await mobileNavToggle.click();
    await expect(sidebar).toBeVisible();

    // Click again to close the mobile sidebar
    await mobileNavToggle.click();
    await expect(sidebar).not.toBeVisible();
  });

  test('should hide mobile navigation toggle on large screens', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 }); // Desktop size

    const mobileNavToggle = page.locator('.navbar__toggle');
    await expect(mobileNavToggle).not.toBeVisible();

    const desktopNavbar = page.locator('.navbar__items--right');
    await expect(desktopNavbar).toBeVisible(); // Ensure desktop navigation is visible
  });
});