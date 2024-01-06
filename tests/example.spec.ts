import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Click the get started link.
  await page.getByRole('link', { name: 'English' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByText('Tiếng Việt')).toBeVisible();
});
