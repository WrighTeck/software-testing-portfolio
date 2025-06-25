import { expect } from 'chai';

describe('Button Validation Test', () => {
  it('should verify all buttons are visible', async () => {
    // Navigate to "Buttons"
    const buttonsMenu = await $('//XCUIElementTypeStaticText[@name="Buttons"]');
    await buttonsMenu.waitForDisplayed({ timeout: 5000 });
    await buttonsMenu.click();

    // XPath selectors for buttons
    const buttons = [
      '(//XCUIElementTypeStaticText[@name="Button"])[1]',       // Button
      '//XCUIElementTypeButton[@name="add"]',                   // Add
      '//XCUIElementTypeButton[@name="More Info"]',             // More Info
      '//XCUIElementTypeButton[@name="X Button"]',              // X
      '(//XCUIElementTypeStaticText[@name="Button"])[2]',       // Strikethrough
      '//XCUIElementTypeButton[@name="Person"]',                // Person
      '(//XCUIElementTypeButton[@name="Button"])[3]'            // Symbol
    ];

    for (const xpath of buttons) {
      const button = await $(xpath);
      await button.waitForDisplayed({ timeout: 5000 });
      expect(await button.isDisplayed()).to.be.true;
    }
  });
});
