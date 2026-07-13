import {expect, test} from '@playwright/test';
import { LoginPage } from '../page-objects/login-page';
import { AdminPage } from '../page-objects/admin-page';

test.describe('Login', () => {
    let loginPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
    test('user should be on the main page with calid creds', {tags: ['@smoke', '@regression']}, async ({page}) => {
        const adminPage = new AdminPage(page);
        await loginPage.login('Admin', 'admin123')
        await expect(await adminPage.header.getElement(adminPage.header.userDropdown)).toBeVisible();
    })

    test('should be error notifications when credential fields are empty', async ({page}) => {
        await loginPage.login('', '');
        await expect(await (await loginPage.getElement(loginPage.errorNotification)).nth(0)).toHaveText('Required')
        await expect(await (await loginPage.getElement(loginPage.errorNotification)).nth(1)).toHaveText('Required')
    })

    test('should be error notifications for password field with emptyy password', async ({page}) => {
        await loginPage.login('admin', '');
        await expect(await loginPage.getElement(loginPage.passwordErrorNotification)).toHaveText('Required')
    })

    test('should be error notifications for username with empty esername field', async ({page}) => {
        await loginPage.login('', 'admin123');
        await expect(await loginPage.getElement(loginPage.usernameErrorNotification)).toHaveText('Required')
    })
})