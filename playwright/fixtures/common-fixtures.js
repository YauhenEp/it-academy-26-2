import  {test as base} from "@playwright/test"
const { LoginPage } = await import('../page-objects/login-page')

export const test = base.extend({
    validLogin: [
        async ({page}, use) => {
            const loginPage = new LoginPage(page)
            await loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            await loginPage.login('Admin', 'admin123')
            await use()
        }, {scope: 'worker'}
    ],
})