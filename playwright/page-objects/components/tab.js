import { Base } from '../base';

class Tab extends Base {
  constructor(page) {
    super(page);
  }

  async getTabByName(tabName) {
    return `//*[@class='oxd-topbar-body-nav-tab-item' and contains(text(), '${tabName}')]`;
  }

  async getSubTabItemByName(subTabItemName) {
    return `//*[@class='oxd-topbar-body-nav-tab-link' and contains(text(), '${subTabItemName}')]`;
  }

  // TODO version with css
  // async getTabByName1(tabName) {
  //     const rootSelctor = `.oxd-topbar-body-nav-tab`
  //     const tabs = {
  //         "user management": `${rootSelctor}:nth-child(1)`,
  //         "job": `${rootSelctor}:nth-child(2)`,
  //     }
  //     return tabs[tabName.toLowerCase()]
  // }

  async openTab(tabName, subTabItemName) {
    await this.getElement(this.getTabByName(tabName)).click();
    if (subTabName) {
      await this.getElement(this.getSubTabItemByName(subTabItemName)).click();
    }
  }
}

export { Tab };
