describe('ApiDemos – Toggle Button State Test', () => {
  it('should toggle the first toggle button and verify its state', async () => {
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

     // Step 4: Locate Toggle 1 using resourceId
    const toggle1 = await $('android=new UiSelector().resourceId("io.appium.android.apis:id/toggle1")');
    await toggle1.waitForDisplayed({ timeout: 3000 });

      // Step 5: Tap to turn the toggle ON
    await toggle1.click();

    // Step 6: Assert that the toggle is ON
    let state = await toggle1.getText();
    expect(state).toBe('ON');

    // Step 7: Tap again to turn the toggle OFF
    await toggle1.click();

    // Step 8: Assert that the toggle is OFF
    state = await toggle1.getText();
    expect(state).toBe('OFF');
  });
});
