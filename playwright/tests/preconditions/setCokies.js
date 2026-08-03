import { test } from '@playwright/test';
import path from 'path';

const FILE_WITH_COOKIES = path.join(__dirname, '../../states/cookies.json');

test.describe('set cokies', () => {
  test('Set cookies', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.locator('.QS5gu.sy4vM').nth(1).click();
    await page.waitForTimeout(2000);
    await page.waitForLoadState('load');
    await page.context().storageState({ path: FILE_WITH_COOKIES });
  });
});
