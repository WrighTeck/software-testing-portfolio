describe('ApiDemos – Text Input Validation Test', () => {
  it('should enter text into the input field, validate it, and clear it', async () => {
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

    // Step 4: Locate the text input field by resource-id
    const inputField = await $('android=new UiSelector().resourceId("io.appium.android.apis:id/edit")');
    await inputField.waitForDisplayed({ timeout: 3000 });

    // Step 5: Input a name into the text field
    const testName = 'Jeannie Wright';
    await inputField.setValue(testName);

    // Step 6: Assert the text matches
    const enteredText = await inputField.getText();
    expect(enteredText).toBe(testName);

    // Step 7: Clear the input field
    await inputField.clearValue();

    // Step 8: Assert the field now has placeholder text now
    const clearedText = await inputField.getText();
    expect(clearedText).toBe('hint text');
  });
});
