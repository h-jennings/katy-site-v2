import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Homepage', () => {
  test('Goes to homepage', async ({ page }) => {
    await expect(page).toHaveURL('/');
  });
});
