import { By, until, Builder } from 'selenium-webdriver';
import {expect} from "chai";
import userData from "../test-data/users.json" with {"type": "json"}

describe('Onliner Login', function () {
    let driver;
    before(async () => {
        driver = new Builder().forBrowser('firefox').build();
        await driver.manage().window().setSize({width: 1960, height: 1280})
        await driver.get('https://www.onliner.by/');
    })

    after(async () => {
        await driver.quit();
    })

    it('should be mesaggge wrong login or password when input wrong credentials', async () => {
        await driver.wait(until.elementLocated(By.css('.auth-bar__item.auth-bar__item--text')));
        const enterButton = await driver.findElement(By.css('.auth-bar__item.auth-bar__item--text'));
        await enterButton.click();
        const emailLoginTab = await driver.findElements(By.css('.auth-form__button_choose'))
        await emailLoginTab[1].click();
        const loginField = await driver.findElement(By.css('[placeholder="Ник или e-mail"]'))
        await loginField.sendKeys(userData.invalidUser.userName);
        const passwordField = await driver.findElement(By.css('[placeholder="Пароль"]'))
        await passwordField.sendKeys(userData.invalidUser.password)
        const loginButton = await driver.findElement(By.css('.auth-button_primary'))
        await loginButton.click();
        await driver.wait(until.elementLocated(By.css('.auth-form__description_error')));
        const errorMessage = await driver.findElement(By.css('.auth-form__description_error'));
        expect(await errorMessage.getText()).to.equal('Неверный логин или пароль');
    })
})