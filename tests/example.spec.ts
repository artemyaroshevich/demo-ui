import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    const path = require('path');
    const filePath = `file://${path.resolve('order-flow.html')}`;
    await page.goto(filePath);
})

test('Check button disabled', async ({page}) => {
    await expect(page.getByTestId("submit-order")).toBeDisabled()
});

test('Check button enadled', async ({page}) => {
    const userNameField = await page.getByTestId("username")
    const userEmailField = await page.getByTestId("email")
    await userNameField.fill("test")
    await userEmailField.fill("test@test.com")
    await expect(page.getByTestId("submit-order")).toBeEnabled()
});

test('Check e2n test', async ({page}) => {
    const userNameField = await page.getByTestId("username")
    const userEmailField = await page.getByTestId("email")
    const popUp = await page.locator("css=#popup-message")
    await userNameField.fill("test")
    await userEmailField.fill("test@test.com")
    await (page.getByTestId("submit-order")).click()
    await expect(popUp).toBeEnabled()
    await expect(popUp).toBeVisible()
});




