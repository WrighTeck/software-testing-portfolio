describe('ApiDemos – Scroll and Tap Test', () => {
  it('should scroll down and up, then tap on WebView and verify the screen appears', async () => {
    // Step 1: Tap on "Views"
    const views = await $('android=new UiSelector().text("Views")');
    await views.waitForDisplayed({ timeout: 3000 });
    await views.click();

    // Step 2: Perform a swipe down
    await driver.execute('mobile: swipeGesture', {
      left: 100, top: 800, width: 600, height: 400,
      direction: 'up',
      percent: 0.75,
    });

    // Step 3: Perform a swipe up
    await driver.execute('mobile: swipeGesture', {
      left: 100, top: 400, width: 600, height: 400,
      direction: 'down',
      percent: 0.75,
    });

    // Step 4: Scroll down again to target "WebView"
    await driver.execute('mobile: scroll', {
      strategy: 'accessibility id',
      selector: 'WebView',
    });

    // Step 5: Tap on "WebView"
    const webview = await $('~WebView');
    await webview.waitForDisplayed({ timeout: 3000 });
    await webview.click();

    // Step 6: Assert the WebView screen appears
    const contentText = await $('android=new UiSelector().text("Views/WebView")');
    await contentText.waitForDisplayed({ timeout: 3000 });
    await expect(contentText).toBeDisplayed();
  });
});
