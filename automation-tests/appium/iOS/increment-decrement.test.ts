import { expect } from 'chai';

describe('Increment/Decrement Test', () => {
  it('should increment and decrement numbers correctly', async () => {
    // Navigate to Steppers menu
    const steppersMenu = await $('//XCUIElementTypeTable/XCUIElementTypeCell[13]/XCUIElementTypeOther[1]/XCUIElementTypeOther');
    await steppersMenu.waitForDisplayed({ timeout: 5000 });
    await steppersMenu.click();

    // Locate increment (+) and decrement (-) buttons for Default stepper
    const incrementButton = await $('(//XCUIElementTypeButton[@name="Increment"])[1]');
    const decrementButton = await $('(//XCUIElementTypeButton[@name="Decrement"])[1]');

    // Locate the label showing the current number value for Default stepper
    const valueLabel = await $('(//XCUIElementTypeStaticText[@name="0"])[1]');
    await valueLabel.waitForDisplayed({ timeout: 5000 });

    // Get initial value
    let initialValueText = await valueLabel.getText();
    let initialValue = parseInt(initialValueText);

    // Click increment button and verify value increased by 1
    await incrementButton.click();
    let incrementedValueText = await valueLabel.getText();
    let incrementedValue = parseInt(incrementedValueText);
    expect(incrementedValue).to.equal(initialValue + 1);

    // Click decrement button and verify value decreased by 1 (back to initial)
    await decrementButton.click();
    let decrementedValueText = await valueLabel.getText();
    let decrementedValue = parseInt(decrementedValueText);
    expect(decrementedValue).to.equal(initialValue);
  });
});
