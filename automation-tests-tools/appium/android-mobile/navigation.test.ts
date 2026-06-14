describe('ApiDemos – Navigation Test', () => {
  it('should verify main menu, check Views submenu items, and tap on Focus', async () => {
    // Wait for the "API Demos" main menu to appear
    const mainMenu = await $('android=new UiSelector().text("API Demos")');
    await mainMenu.waitForDisplayed({ timeout: 5000 });
    await expect(mainMenu).toBeDisplayed();

    // Tap on the "Views" menu item
    const viewsMenuItem = await $('android=new UiSelector().text("Views")');
    await viewsMenuItem.waitForDisplayed({ timeout: 3000 });
    await viewsMenuItem.click();

    // Define expected submenu items under Views
    const expectedItems = ['Buttons', 'Controls', 'Custom', 'Focus'];

    // Loop through expected items and verify they are displayed
    for (const item of expectedItems) {
      const element = await $(`android=new UiSelector().text("${item}")`);
      await element.waitForDisplayed({ timeout: 3000 });
      await expect(element).toBeDisplayed();
    }

    // Tap on the "Focus" submenu item
    const focusItem = await $('android=new UiSelector().text("Focus")');
    await focusItem.waitForDisplayed({ timeout: 3000 });
    await focusItem.click();
  });
});
