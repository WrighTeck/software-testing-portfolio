// Importing the core Playwright testing utilities
import { test, expect } from '@playwright/test';
// Define a list of footer links to be tested, each with a name and its expected URL
const footerLinks = [
  { name: 'About Us', expectedUrl: 'https://www.wrighteck.com/about-us' },
  { name: 'Terms of Use', expectedUrl: 'https://www.wrighteck.com/terms-of-service' },
  { name: 'Disclaimer', expectedUrl: 'https://www.wrighteck.com/disclaimer' },
  { name: 'Privacy Policy', expectedUrl: 'https://www.wrighteck.com/privacy-policy' },
];
// Loop through each footer link defined above
for (const link of footerLinks) {
  // Create a dynamic test for each footer link
  test(`Footer link - ${link.name} navigates correctly`, async ({ browser }) => { 
  // Create a new browser context to isolate this test from others
    const context = await browser.newContext();
  // Open a new page (tab) in the current context
    const page = await context.newPage();
  // Navigate to the homepage where the footer links are located
    await page.goto('https://www.wrighteck.com');
  // Wait until the DOM content is fully loaded before interacting with elements
    await page.waitForLoadState('domcontentloaded');
  // Wait for the new page (tab) to open after clicking the footer link
    const [newTab] = await Promise.all([
      context.waitForEvent('page'),  // Listen for a new page event (tab opening)
      page.getByRole('link', { name: link.name }).click(), // Click the footer link by its accessible name
    ]);
  // Wait for the new tab to fully load all resources (not just DOM content)
    await newTab.waitForLoadState('load');
  // Assert that the new tab's URL matches the expected URL for the clicked link
    await expect(newTab).toHaveURL(link.expectedUrl);
  });
}
