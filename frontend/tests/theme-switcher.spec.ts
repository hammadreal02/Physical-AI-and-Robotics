import { test, expect } from '@playwright/test';

test.describe('Theme Switcher', () => {
  test('should toggle between light and dark mode', async ({ page }) => {
    await page.goto('/'); // Navigate to the home page

    // Check if the theme switcher button exists
    const themeSwitcherButton = page.locator('button[title="Dark mode toggle"]');
    await expect(themeSwitcherButton).toBeVisible();

    // Get initial theme (should be light by default in Docusaurus)
    const initialTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    expect(initialTheme).toBe('light');

    // Click the theme switcher button to switch to dark mode
    await themeSwitcherButton.click();

    // Verify theme has switched to dark
    const darkTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    expect(darkTheme).toBe('dark');

    // Click the theme switcher button again to switch back to light mode
    await themeSwitcherButton.click();

    // Verify theme has switched back to light
    const lightTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    expect(lightTheme).toBe('light');
  });

  test('should persist theme preference on navigation', async ({ page }) => {
    await page.goto('/');

    const themeSwitcherButton = page.locator('button[title="Dark mode toggle"]');
    await expect(themeSwitcherButton).toBeVisible();

    // Switch to dark mode
    await themeSwitcherButton.click();
    let currentTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    expect(currentTheme).toBe('dark');

    // Navigate to another page
    await page.locator('text=Docs').click(); // Click on 'Docs' link
    await page.waitForURL('/docs/intro');

    // Verify theme preference is persisted on the new page
    currentTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    expect(currentTheme).toBe('dark');

    // Navigate back to home and verify again
    await page.goto('/');
    currentTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    expect(currentTheme).toBe('dark');
  });
});