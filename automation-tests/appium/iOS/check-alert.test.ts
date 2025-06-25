import { expect } from 'chai';
describe('Check Alert Test', () => {
  it('should enter text in alert input and close the alert', async () => {
   
    // Navigate to "Alert Views"
  const alertViews = await $('//XCUIElementTypeCell[.//XCUIElementTypeStaticText[@name="Alert Views"]]');
    await alertViews.waitForDisplayed({ timeout: 10000 });
    await alertViews.click();

    // Tap "Text Entry"
    const textEntry = await $('~Text Entry');
    await textEntry.waitForDisplayed({ timeout: 10000 });
    await textEntry.click();
    await driver.pause(5000);  

   const staticTexts = await $$('//XCUIElementTypeStaticText');
    for (const textElem of staticTexts) {
   const name = await textElem.getAttribute('name');
    console.log('Static text:', name);
}

    // Verify alert heading "A Short Title is Best"
    const alertHeading = await $('//XCUIElementTypeStaticText[@name="A Short Title Is Best"]');    
    await alertHeading.waitForDisplayed({ timeout: 10000 });
    expect(await alertHeading.isDisplayed()).to.be.true;

    // Enter "WrightTeck" in input field
    const inputField = await $('//XCUIElementTypeTextField');
    await inputField.waitForDisplayed({ timeout: 10000 });
    await inputField.setValue('WrightTeck');

    // Verify "WrightTeck" in input field
    expect(await inputField.getText()).to.equal('WrightTeck');

    // Tap "Ok" to close the alert
    const okButton = await $('~OK');
    await okButton.waitForDisplayed({ timeout: 10000 });
    await okButton.click();
  });
});
