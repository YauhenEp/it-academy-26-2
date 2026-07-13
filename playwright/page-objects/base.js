class Base {
    constructor(page) {
        this.page = page;
    }

    async navigate(url, endpoint) {
        return this.page.goto(`${url}${endpoint ? endpoint : ''}`)
    }

    async getElement(locator) {
        return this.page.locator(locator);
    }
}

export {Base}