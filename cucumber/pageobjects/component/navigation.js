import Base from '../base';

class LeftNavigation extends Base {
  constructor() {
    super();
  }

  get menuItems() {
    return `//*[contains(@class, 'oxd-main-menu-item--name')]//ancestor::a`;
  }

  get "Search Field"() {
    return '.oxd-main-menu-search .oxd-input.oxd-input--active';
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
    if (await (await this.getElement(this.toggledSearchField)).isDisplayed()) {
      await this.doClick((this.openCloseMenuButton));
    }
  }

  async goToPageByName(menuItemName) {
    await this.openMenu();
    await this.doClick(await this.getMenuItemByName(menuItemName));
  }

  async goTopPageByNumber(menuItemNumber) {
    await this.openMenu();
    await (await this.getElementsArray(this.menuItems)[menuItemNumber]).click();
  }
}

export default new LeftNavigation();
