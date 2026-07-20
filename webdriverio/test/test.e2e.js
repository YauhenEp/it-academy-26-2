import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login-page.js'


describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    await loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.login('Admin', 'admin123');
    await expect(await loginPage.getElement(loginPage.usernameField)).not.toBeDisplayed();
  })
})

