describe('ApiDemos – Checkbox Interaction Test', () => {
  it('should toggle checkbox 1 and verify its state', async () => {
    // Step 1: Tap on "Views"
    const views = await $('android=new UiSelector().text("Views")');
    await views.waitForDisplayed({ timeout: 3000 });
    await views.click();

    // Step 2: Tap on "Controls"
    const controls = await $('android=new UiSelector().text("Controls")');
    await controls.waitForDisplayed({ timeout: 3000 });
    await controls.click();

    // Step 3: Tap on "1. Light Theme"
    const lightTheme = await $('android=new UiSelector().text("1. Light Theme")');
    await lightTheme.waitForDisplayed({ timeout: 3000 });
    await lightTheme.click();

    // Step 4: Locate the first checkbox (text: "Checkbox 1")
   const checkbox = await $('android=new UiSelector().resourceId("io.appium.android.apis:id/check1")');
   
   // Scroll into view if necessary
    await driver.execute('mobile: scroll', { strategy: 'accessibility id', selector: 'Checkbox 1' });
    await checkbox.waitForDisplayed({ timeout: 3000 });

    // Step 5: Tap to check the checkbox
    await checkbox.click();

    // Step 6: Assert checkbox is checked
    const isChecked = await checkbox.getAttribute('checked');
    expect(isChecked).toBe('true');

    // Step 7: Tap again to uncheck
    await checkbox.click();

    // Step 8: Assert checkbox is unchecked
    const isUnchecked = await checkbox.getAttribute('checked');
    expect(isUnchecked).toBe('false');
  });
});
