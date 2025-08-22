const timeConfig = require('../configue/timeconfig.json');
import { test, expect } from '@playwright/test';
class utils {
    // Function to wait until an element is displayed
    static async waitUntilDisplayed(element) {
        // Wait for the locator to be visible
        await element.waitFor({ state: 'visible' ,TIMEOUT:3000 });
    }
    // Function to type in an input field
    static async typeInInputField(locator, text) {
        // Wait for the locator to be visible
        await this.waitUntilDisplayed(locator);
        // Clear the input field before typing  
        await locator.fill(''); // Clear the fie
        // Fill the input field with the provided text
        await locator.fill(text);
    }
    //function to clcik on a button
    static async clickButton(page,locator) {
        // Wait for the locator to be visible
        await this.waitUntilDisplayed(locator);
        // Click the button
        await this.takeScreenshot(page, 'clickButton');
        await locator.click();

    }
    //function to take screenshot
    static async takeScreenshot(page, teName) {
        // Take a screenshot and save it with the test name
      //  await page.screenshot({ path: `screenshots/${teName}-${Date.now()}.png`, fullPage: true });
    }
}

module.exports = utils;