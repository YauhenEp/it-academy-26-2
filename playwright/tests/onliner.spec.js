import { test, expect } from '@playwright/test';

test.describe.skip('Onlner', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.onliner.by/');
  });
  test('should be error notification with invalid login and password', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
    await page.locator('.auth-bar__item.auth-bar__item--text').click();
    await page.locator('.auth-form__button_choose').nth(1).click();
    await page.locator('[placeholder="Ник или e-mail"]').fill('Username');
    await page.locator('[placeholder="Пароль"]').fill('password123');
    await page.locator('.auth-button_primary').click();
    await expect(await page.locator('.auth-form__description_error')).toHaveText('Неверный логин или пароль');
  });
});
