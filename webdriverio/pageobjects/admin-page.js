import { $ } from '@wdio/globals'
import Base from './base.js';

class AdminPage extends Base {

  constructor(page) {
    super(page)
  }

  get header() {
    return `.oxd-topbar-header-title`
  }
}

export default new AdminPage();
