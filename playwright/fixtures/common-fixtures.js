import { test as base } from '@playwright/test';
import { AdminPage } from '../page-objects/admin-page';
import { LoginPage } from '../page-objects/login-page';

export const test = base.extend({
  goToAdminPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    const adminPage = new AdminPage(page);
    await loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.login('Admin', 'admin123');
    await adminPage.leftNavigation.goToPageByName('Admin');
    await use(page);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  adminPage: async ({ page }, use) => {
    const adminPage = new AdminPage(page);
    await use(adminPage);
  },

  sendRequest: async ({ request }, use) => {
    const response = await request.post('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      data: {
        username: 'Admin',
        password: 'admin123',
      },
    });
    await use(request);
  },

  dataBase: [
    async ({}, use) => {
      const db = new DataBase();
      await db.connect({
        login: 'root',
        password: 'root',
        host: 'localhost',
        port: 3306,
        database: 'orangehrm',
      });
      await use(db);
      await db.disconnect();
    },
    { scope: 'worker' },
  ],

  testDataCreation: async ({ dataBase }, use) => {
    await dataBase.query('INSERT INTO users (username, password) VALUES (?, ?)', ['testuser', 'testpassword']);
    await use();
    await dataBase.query('DELETE FROM users WHERE username = ?', ['testuser']);
  },

  sendGetRequest: async ({ request }, use) => {
    const response = await request.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await use(response);
  },
});
