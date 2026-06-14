// Import the core Playwright testing functions
import { test, expect } from '@playwright/test';

// Test 1: Block empty submission
test('Newsletter Form - Block empty submission', async ({ page }) => {
// Navigate to the homepage
  await page.goto('https://www.wrighteck.com');
 // Wait for the DOM to be fully loaded before interacting
  await page.waitForLoadState('domcontentloaded');
// Locate the newsletter form's submit button by its visible text
  const submitButton = page.locator('button:has-text("Get Teck Tips, Tricks, & Hacks Now!!")');
// Check whether the form attached to the button would be blocked due to invalid input (empty in this case)
const isBlocked = await submitButton.evaluate((btn) => {
  const form = (btn as HTMLButtonElement).form; // Access the form element associated with the button
  return form ? !form.checkValidity() : true; // Return true if form is invalid or doesn't exist
});
  // Assert that the form is blocked (i.e., invalid submission)
  expect(isBlocked).toBeTruthy();
});
// Test 2: Invalid email format
test('Newsletter Form - Invalid email format', async ({ page }) => {
// Navigate to the homepage
  await page.goto('https://www.wrighteck.com');
// Wait for the DOM content to load
  await page.waitForLoadState('domcontentloaded');
// Locate the email input field
  const emailField = page.locator('input[type="email"]');
 // Fill the field with an invalid email string
  await emailField.fill('invalid-email');
 // Locate and click the submit button
  const submitButton = page.locator('button:has-text("Get Teck Tips, Tricks, & Hacks Now!!")');
  await submitButton.click();
  // Check whether the email field's input is considered valid
  const isValid = await emailField.evaluate((input) => (input as HTMLInputElement).validity.valid);
   // Assert that the email field is invalid (since the format is incorrect)
  expect(isValid).toBeFalsy();
});

// Test 3: Skipped test due to CAPTCHA
test.skip('Newsletter Form - Skipped due to CAPTCHA on valid email', async ({ page }) => {
 // Navigate to the homepage
  await page.goto('https://www.wrighteck.com');
 // Skipped: Cannot proceed with automated submission due to CAPTCHA on the form
});
