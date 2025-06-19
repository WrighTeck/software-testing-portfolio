import { test, expect } from '@playwright/test';

// Test 1: Block empty submission
test('Newsletter Form - Block empty submission', async ({ page }) => {
  await page.goto('https://www.wrighteck.com');
  await page.waitForLoadState('domcontentloaded');

  const submitButton = page.locator('button:has-text("Get Teck Tips, Tricks, & Hacks Now!!")');

const isBlocked = await submitButton.evaluate((btn) => {
  const form = (btn as HTMLButtonElement).form;
  return form ? !form.checkValidity() : true;
});
  expect(isBlocked).toBeTruthy();
});

test('Newsletter Form - Invalid email format', async ({ page }) => {
  await page.goto('https://www.wrighteck.com');
  await page.waitForLoadState('domcontentloaded');

  const emailField = page.locator('input[type="email"]');
  await emailField.fill('invalid-email');

  const submitButton = page.locator('button:has-text("Get Teck Tips, Tricks, & Hacks Now!!")');
  await submitButton.click();

  const isValid = await emailField.evaluate((input) => (input as HTMLInputElement).validity.valid);
  expect(isValid).toBeFalsy();
});

// Test 3: Skipped test due to CAPTCHA
test.skip('Newsletter Form - Skipped due to CAPTCHA on valid email', async ({ page }) => {
  await page.goto('https://www.wrighteck.com');
});
