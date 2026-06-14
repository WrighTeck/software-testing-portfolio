import { expect } from 'chai';

describe('Toggle Switches Test', () => {
  it('should toggle Default and Tinted switches off and on', async () => {
    // Navigate to "Switches"
    const switchesMenu = await $('//XCUIElementTypeTable/XCUIElementTypeCell[14]/XCUIElementTypeOther[1]/XCUIElementTypeOther');
    await switchesMenu.waitForDisplayed({ timeout: 5000 });
    await switchesMenu.click();

    // Locate Default switch
    const defaultSwitch = await $('(//XCUIElementTypeSwitch[@value="1"])[1]');    await defaultSwitch.waitForDisplayed({ timeout: 5000 });

    // Toggle Default switch off (if it is on)
   if (await defaultSwitch.getAttribute('value') === '1') {
  await defaultSwitch.click();
  await defaultSwitch.waitForEnabled({ timeout: 2000 });  // optional wait
  expect(await defaultSwitch.getAttribute('value')).to.equal('0');
   }

    // Toggle Default switch on
    await defaultSwitch.click();
    expect(await defaultSwitch.getAttribute('value')).to.equal('1');

    // Locate Tinted switch
    const tintedSwitch = await $('(//XCUIElementTypeSwitch[@value="1"])[2]');
    await tintedSwitch.waitForDisplayed({ timeout: 5000 });

    // Toggle Tinted switch off (if it is on)
    if (await tintedSwitch.getAttribute('value') === '1') {
      await tintedSwitch.click();
      await tintedSwitch.waitForEnabled({ timeout: 2000 }); // optional wait
      expect(await tintedSwitch.getAttribute('value')).to.equal('0');
    }

    // Toggle Tinted switch on
    await tintedSwitch.click();
    expect(await tintedSwitch.getAttribute('value')).to.equal('1');
  });
});
