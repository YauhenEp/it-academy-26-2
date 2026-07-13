import { Base } from '../base';

class LeftNavigation extends Base {
  constructor(page) {
    super(page);
  }

  get menuItems() {
    return `//*[contains(@class, 'oxd-main-menu-item--name')]//ancestor::a`;
  }

  get searchField() {
    return this.page.locator('.oxd-main-menu-search .oxd-input.oxd-input--active');
  }

  get toggledSearchField() {
    return '.oxd-main-menu-search .oxd-input.oxd-input--active.toggled';
  }

  get openCloseMenuButton() {
    return '.oxd-icon-button.oxd-main-menu-button';
  }

  async getMenuItemByName(itemName) {
    return `//*[contains(@class, 'oxd-main-menu-item--name') and text()='${itemName}']//ancestor::a`;
  }

  async openMenu() {
    if (await this.page.locator(this.toggledSearchField).isVisible()) {
      await this.page.locator(this.openCloseMenuButton).click();
    }
  }

  async goToPageByName(menuItemName) {
    await this.openMenu();
    await (await this.page.locator(await this.getMenuItemByName(menuItemName))).click();
  }

  async goTopPageByNumber(menuItemNumber) {
    await this.openMenu();
    await (await this.page.locator(this.menuItems)).nth(menuItemNumber).click();
  }
}

export { LeftNavigation };
