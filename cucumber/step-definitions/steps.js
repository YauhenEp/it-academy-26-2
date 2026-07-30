import { Given, When, Then } from '@wdio/cucumber-framework';
import { $ } from '@wdio/globals'
import {expect} from "chai"
import Base from '../pageobjects/base.js';

import LoginPage from '../pageobjects/login-page.js';
import AdminPage from '../pageobjects/admin-page.js';
const base = new Base()

Given(/^I navigate to the (.*) page$/, async (url) => {
    await LoginPage.navigate(url)
});

When(/^I login with username (\w+) and password (.+)$/, async function (username, password) {
    const world = this;
    console.log('1 -- ', world)
    world.message = 'Hello from step definition';
    await LoginPage.login(username, password)
});

Then(/^I expect element (\w+) should be visible$/, async function (message) {
    const world = this;
    console.log('1 -- ', world)
    // console.log(message)
    await await $(AdminPage["User Dropdown"]).waitForDisplayed();
    await expect(await $(AdminPage["User Dropdown"]).isDisplayed()).to.equal(true);
});

Given(/^I wait for (.*) seconds$/, async (numberOfSeconds) => {
    await browser.pause(numberOfSeconds)
})

When("I click on {locator} webElement", async function (element) {
    // Admin Page > Left Navigation > Search Field
    console.log('element ', element)
    await base.doClick(await base.getElement(element))
})

When("I fill webElement {locator} with text {string}", async function (element, text) {
    // Admin Page > Left Navigation > Search Field
    console.log('element ', element)
    await base.fillField(await base.getElement(element), text)
})