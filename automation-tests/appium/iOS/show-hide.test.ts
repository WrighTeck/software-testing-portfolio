import { expect } from 'chai';

describe('Show/Hide Views Test', () => {
  it('should show and hide Further Detail input field', async () => {
    // Navigate to Stack Views
const stackViews = await $('//XCUIElementTypeStaticText[@name="Stack Views"]');    await stackViews.waitForDisplayed({ timeout: 5000 });
    await stackViews.click();

    // Tap "+" button to show Further Detail input field
    const plusButton = await $('(//XCUIElementTypeButton[@name="stepper increment"])[1]');
    await plusButton.waitForDisplayed({ timeout: 5000 });
    await plusButton.click();

    // Verify Further Detail input field is displayed
    const furtherDetail = await $('~Further Detail');
    await furtherDetail.waitForDisplayed({ timeout: 5000 });
    expect(await furtherDetail.isDisplayed()).to.be.true;

    // Tap "-" button to hide Further Detail input field
    const minusButton = await $('(//XCUIElementTypeButton[@name="stepper decrement"])[1]');    await minusButton.waitForDisplayed({ timeout: 5000 });
    await minusButton.click();

    // Verify Further Detail input field is no longer displayed
    expect(await furtherDetail.isDisplayed()).to.be.false;
  });
});
