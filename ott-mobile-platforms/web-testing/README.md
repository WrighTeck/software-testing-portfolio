# Web Testing

This section demonstrates how web applications are tested using real-world debugging techniques, tools, and workflows.

## Tools Used
- Chrome DevTools (Network, Console, Performance)
- Postman (API validation)
- Charles Proxy (network traffic inspection)
- BrowserStack (cross-browser testing)
- Playwright (automation)

## Key Testing Areas
- UI and functional validation
- API request and response validation
- Network and performance analysis
- Cross-browser compatibility testing

## Debugging Workflow Example

Issue: API data not displaying on UI

Steps:
1. Open Chrome DevTools → Network tab
2. Refresh the page and capture API requests
3. Identify failed request (e.g., 500 error)
4. Validate response in Postman
5. Review console logs for frontend errors
6. Confirm backend vs frontend issue

## Automation Example (Playwright)

```ts
import { test, expect } from '@playwright/test';

test('Verify homepage loads', async ({ page }) => {
  await page.goto('https://www.wrighteck.com');
  await expect(page).toHaveTitle(/WrighTeck/);
});
