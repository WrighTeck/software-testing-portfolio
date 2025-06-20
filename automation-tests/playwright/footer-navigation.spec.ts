import { test, expect } from '@playwright/test';

const footerLinks = [
  { name: 'About Us', expectedUrl: 'https://www.wrighteck.com/about-us' },
  { name: 'Terms of Use', expectedUrl: 'https://www.wrighteck.com/terms-of-service' },
  { name: 'Disclaimer', expectedUrl: 'https://www.wrighteck.com/disclaimer' },
  { name: 'Privacy Policy', expectedUrl: 'https://www.wrighteck.com/privacy-policy' },
];

for (const link of footerLinks) {
  test(`Footer link - ${link.name} navigates correctly`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.wrighteck.com');
    await page.waitForLoadState('domcontentloaded');

    const [newTab] = await Promise.all([
      context.waitForEvent('page'),
      page.getByRole('link', { name: link.name }).click(),
    ]);

    await newTab.waitForLoadState('load');
    await expect(newTab).toHaveURL(link.expectedUrl);
  });
}
