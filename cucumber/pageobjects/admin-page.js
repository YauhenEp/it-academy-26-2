import { $ } from '@wdio/globals'
import Base from './base.js';
import LeftNavigation from './component/navigation';

class AdminPage extends Base {

  constructor(page) {
    super(page)
    this["Left Navigation"] = LeftNavigation
  }

  get "Header"() {
    return `.oxd-topbar-header-title`
  }

  get "User Dropdown"() {
    return `.oxd-userdropdown-tab`
  }
}

export default new AdminPage();