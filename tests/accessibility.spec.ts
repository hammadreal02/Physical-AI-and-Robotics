import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test.describe('Accessibility Testing', () => {
  test('should not have any WCAG A or AA accessibility violations on the homepage', async ({ page }) => {
    await page.goto('/');
    await injectAxe(page);
    await checkA11y(page, null, {
      reportViolations: true,
      rules: {
        'color-contrast': { enabled: true },
        'image-alt': { enabled: true },
        // Add more specific rules as needed
      },
      // You can configure the level of violations to report (e.g., 'critical', 'serious', 'moderate', 'minor')
      // and the standards to check against (e.g., 'WCAG2A', 'WCAG2AA', 'WCAG21AA')
      axeOptions: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa'], // Check against WCAG 2.1 A and AA standards
        },
      },
    });
  });

  test('should not have any WCAG A or AA accessibility violations on the intro documentation page', async ({ page }) => {
    await page.goto('/docs/intro');
    await injectAxe(page);
    await checkA11y(page, null, {
      reportViolations: true,
      rules: {
        'color-contrast': { enabled: true },
        'image-alt': { enabled: true },
      },
      axeOptions: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa'],
        },
      },
    });
  });

  // Add more tests for other critical pages as needed
});
