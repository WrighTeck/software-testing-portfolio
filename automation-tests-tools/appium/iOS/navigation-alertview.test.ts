import { expect } from 'chai';

describe('Navigation Test - Alert Views', () => {
  it('should navigate from main menu to Alert Views and verify items', async () => {
    // Tap "Alert Views" menu item
    const alertViews = await $('~Alert Views'); 
    await alertViews.waitForDisplayed({ timeout: 5000 });
    await alertViews.click();

    // Verify heading says "Alert Views"
    const heading = await $('//XCUIElementTypeNavigationBar[@name="Alert Views"]');
    await heading.waitForDisplayed({ timeout: 5000 });
    expect(await heading.isDisplayed()).to.be.true;

    // Verify items on the Alert Views screen
    const simpleItem = await $('~Simple');
    const okayCancelItem = await $('~Okay / Cancel');
    const otherItem = await $('~Other');
    const textEntryItem = await $('~Text Entry');

    expect(await simpleItem.isDisplayed()).to.be.true;
    expect(await okayCancelItem.isDisplayed()).to.be.true;
    expect(await otherItem.isDisplayed()).to.be.true;
    expect(await textEntryItem.isDisplayed()).to.be.true;
  });
});
