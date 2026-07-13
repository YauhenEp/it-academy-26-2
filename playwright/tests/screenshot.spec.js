import { expect, test } from "@playwright/test";

test.describe.skip('Screenshot', async () => {
    test('google main page', {tag: '@mainpage'}, async ({page}) => {
        await page.goto('https://www.google.com/');
        await expect(page).toHaveScreenshot('gMainPage.png', {
            mask: [await page.locator('img.lnXdpd')],
            caret: "hide",
            animations: "disabled",
            maxDiffPixels: 250
        })
    })
})