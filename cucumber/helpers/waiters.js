async function waitUntilTextChange(selector, expectedText, timeout = 5000) {
  await browser.waitUntil(async function () {
    return (await $(selector).getText()) === expectedText
  }, {
    timeout,
    timeoutMsg: `Expected text ${expectedText}, text in element ${selector} is ${await element.getText()} after ${timeout}`
  })
}

async function waitForElementExist(selector, reverse = false, timeout = 5000) {
  await browser.waitUntil(async function () {
    return reverse ? await $(selector).isExisting() === false : await $(selector).isExisting() === true;
  }, {
    timeout,
    timeoutMsg: `Element ${selector} is not existing after ${timeout}`
  })
}

export { waitUntilTextChange, waitForElementExist }