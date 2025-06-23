describe('ApiDemos – Layout Validation Test', () => {
  it('should verify the visibility of UI buttons and check alignment/size', async () => {
    // Step 1: Tap on "Views" 
    const views = await $('android=new UiSelector().text("Views")');
    await views.waitForDisplayed({ timeout: 3000 });
    await views.click();

    // Step 2: Tap on "Buttons"
    const buttonsMenu = await $('android=new UiSelector().text("Buttons")');
    await buttonsMenu.waitForDisplayed({ timeout: 3000 });
    await buttonsMenu.click();

    // Step 3: Verify the "Normal" button is visible
    const normalButton = await $('android=new UiSelector().text("Normal")');
    await normalButton.waitForDisplayed({ timeout: 3000 });
    await expect(normalButton).toBeDisplayed();

    // Step 4: Verify the "Small" button is visible
    const smallButton = await $('android=new UiSelector().text("Small")');
    await smallButton.waitForDisplayed({ timeout: 3000 });
    await expect(smallButton).toBeDisplayed();

    // Step 5: Verify the "OFF" button is visible
    const offButton = await $('android=new UiSelector().text("OFF")');
    await offButton.waitForDisplayed({ timeout: 3000 });
    await expect(offButton).toBeDisplayed();

    // Validate size or alignment
    const normalPos = await normalButton.getLocation();
    const smallPos = await smallButton.getLocation();
    console.log(`Normal button X: ${normalPos.x}, Small button X: ${smallPos.x}`);

    // Example: Assert left-aligned
    expect(normalPos.x).toBe(smallPos.x);
  });
});
