import {expect, test} from '@playwright/test';
import { LoginPage } from '../page-objects/login-page';
import { AdminPage } from '../page-objects/admin-page';

test.describe('Login', () => {
    let loginPage;

    test.beforeEach(async ({validLogin}) => {
        loginPage = new LoginPage(validLogin);
    })

    test('admin', async ({validLogin}) => {

    })
})