---

# 📱 Mobile Testing

This section covers testing strategies for Android and iOS applications, including device validation, logging, and network debugging.

## Tools Used
- Android Studio (Logcat, ADB)
- Xcode (iOS logs, simulators)
- Charles Proxy (network traffic)
- Appium + WebdriverIO (automation)

## Key Testing Areas
- Device compatibility
- OS version testing
- Network and API validation
- UI responsiveness

## Debugging Workflow Example

Issue: App crashes on launch

Steps:
1. Open Logcat (Android) or Xcode logs (iOS)
2. Reproduce the issue
3. Identify crash logs and stack trace
4. Validate API responses if applicable
5. Report root cause with logs

## Automation Example (Appium)

```ts
describe('Login Test', () => {
  it('should login successfully', async () => {
    const loginBtn = await $('~loginButton');
    await loginBtn.click();
  });
});
