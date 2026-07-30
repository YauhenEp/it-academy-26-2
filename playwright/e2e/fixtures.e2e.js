import {expect} from '@playwright/test';
import {test} from '../fixtures/common-fixtures';
import { LoginPage } from '../page-objects/login-page';
import { AdminPage } from '../page-objects/admin-page';

test.describe('Login', () => {
    test('admin', async ({loginPage, adminPage}) => {
        await loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await loginPage.login('Admin', 'admin123')
        await adminPage.leftNavigation.goToPageByName('Admin')
        await adminPage.clickElement(await adminPage.header.deleteButton);
    })
})