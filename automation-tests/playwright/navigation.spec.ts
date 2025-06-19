import { test, expect } from '@playwright/test';

test('Click Home and verify visible section', async ({ page }) => {
  await page.goto('https://www.wrighteck.com');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.waitForTimeout(1000);
  await expect(page.locator('text=Home')).toBeVisible(); // You can adjust if needed
});

test('Click Teck Education and verify visible section', async ({ page }) => {
  await page.goto('https://www.wrighteck.com');
  await page.waitForLoadState('domcontentloaded');

  await page.getByRole('link', { name: 'Teck Education' }).click();
  await page.waitForTimeout(1000); // allow scroll or JS transition

  await expect(page.locator('text=Teck Education')).toBeVisible();
});
  test('Click Free AI Assistants and verify visible section', async ({ page }) => {
  await page.goto('https://www.wrighteck.com');
  await page.getByRole('link', { name: 'Free AI Assistants' }).click();
  await page.waitForTimeout(1000);
  await expect(page.locator('text=Free AI Assistants')).toBeVisible();
});
  test('Click Blog and verify visible section', async ({ page }) => {
    await page.goto('https://www.wrighteck.com');
    await page.getByRole('link', { name: 'Blog' }).click();
    await page.waitForTimeout(1000);
    await expect(page.locator('text=Blog')).toBeVisible();
  });
  
test('Click Support Services and verify navigation works', async ({ page }) => {
  await page.goto('https://www.wrighteck.com');
  const supportLink = page.locator('a[href="https://www.wrighteck.com/support-services"]');
  await supportLink.click();
  await page.waitForTimeout(1000);
  await expect(page).toHaveURL(/support-services/);
});
