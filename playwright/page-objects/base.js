class Base {
  constructor(page) {
    this.page = page;
  }

  async navigate(url, endpoint) {
    return this.page.goto(`${url}${endpoint ? endpoint : ''}`);
  }

  async getElement(locator) {
    return this.page.locator(locator);
  }

  async clickElement(locator) {
    await this.page.locator(locator).click();
  }

  async fillElement(locator, value) {
    await this.page.locator(locator).fill(value);
  }
}

export { Base };
