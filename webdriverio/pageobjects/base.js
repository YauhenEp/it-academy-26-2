import { browser } from '@wdio/globals';
import { waitForElementExist } from '../helpers/waiters';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Base {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async navigate(url, endpoint) {
        await browser.url(`${url}${endpoint ? endpoint : ''}`)
    }

    async getElement(locator) {
        await waitForElementExist(locator, true);
        return $(locator);
    }

    async getElementsArray(locator) {
        //TODO create waiter for elements arrays
        return $$(locator);
    }

    async doClick(locator) {
        await $(locator).waitForClickable();
        await $(locator).click();
    }

    async fillField(locator, value) {
        await $(locator).waitForDisplayed();
        await $(locator).setValue(value);
    }
}
