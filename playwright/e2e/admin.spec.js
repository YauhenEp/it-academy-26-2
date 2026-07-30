import {expect} from '@playwright/test';
import {test} from '../fixtures/common-fixtures';
import { LoginPage } from '../page-objects/login-page';
import { AdminPage } from '../page-objects/admin-page';

test.describe('Login', () => {
    let adminPage
    test.beforeEach(async ({goToAdminPage}) => {
        adminPage = new AdminPage(goToAdminPage)
    })
    test('admin', async ({goToAdminPage}) => {
        await expect(await adminPage.getElement(adminPage.systemUserForm)).toBeVisible();
    })
})