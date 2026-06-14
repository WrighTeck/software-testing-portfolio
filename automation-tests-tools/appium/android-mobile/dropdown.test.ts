describe('ApiDemos – Dropdown Test', () => {
  it('should select Earth from the dropdown and verify the selection', async () => {
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

    // Step 4: Tap on the dropdown menu (spinner)
    const dropdown = await $('android=new UiSelector().resourceId("io.appium.android.apis:id/spinner1")');
    await dropdown.waitForDisplayed({ timeout: 3000 });
    await dropdown.click();

    // Step 5: Select "Earth" from the dropdown list
    const earthOption = await $('android=new UiSelector().text("Earth")');
    await earthOption.waitForDisplayed({ timeout: 3000 });
    await earthOption.click();

    // Step 6: Assert that "Earth" is now the selected option in the dropdown
    const selectedOption = await $('android=new UiSelector().text("Earth")');
    const selectedText = await selectedOption.getText();
    expect(selectedText).toBe("Earth");
  });
});
