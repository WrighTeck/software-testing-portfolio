import { expect } from 'chai';

describe('Text Input Default Field Test', () => {
  it('should enter text, validate it, clear, and validate placeholder', async () => {
    // 1. Navigate to Text Fields
    const textFieldsMenu = await $('//XCUIElementTypeStaticText[@name="Text Fields"]');
    await textFieldsMenu.waitForDisplayed({ timeout: 5000 });
    await textFieldsMenu.click();

    // 2. Find Default field
    const defaultField = await $('(//XCUIElementTypeTextField[@value="Placeholder text"])[1]');
    await defaultField.waitForDisplayed({ timeout: 5000 });

    // 3. Enter text
    await defaultField.click();
    await defaultField.clearValue();
    const inputText = 'Text Input Validation with Appium';
    await defaultField.setValue(inputText);

    // 4. Assert text was entered / visible
    const enteredValue = await defaultField.getAttribute('value');
    expect(enteredValue).to.include(inputText, 'Entered text does not match');

    // 5. Clear the text
    await defaultField.clearValue();

    // 6. Validate placeholder text is present after clearing
    const clearedValue = await defaultField.getAttribute('value');
    expect(clearedValue).to.include('Placeholder text', 'Placeholder text not displayed after clearing');
  });
});
