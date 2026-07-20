import { expect } from "chai"
import loginPage from '../pageobjects/login-page.js'
import leftNavigation from '../pageobjects/component/navigation.js'
import adminPage from '../pageobjects/admin-page.js'

describe('Admin', () => {
  before(async () => {
    await loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.login('Admin', 'admin123');
  })

  it('should go to admin page', async () => {
    await leftNavigation.goToPageByName('Admin')
    await expect(await (await adminPage.getElement(adminPage.header)).getText()).to.contain('Admin');;
  })
})