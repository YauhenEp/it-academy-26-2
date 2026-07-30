import { $ } from '@wdio/globals'
import Base from './base.js';

class LoginPage extends Base {

  constructor(page) {
    super(page)
  }

  get "Username Field"() {
    return '[name="username"]';
  }

  get "Password Field"() {
    return '[type="password"]';
  }

  get loginButton() {
    return '.orangehrm-login-button';
  }

  get errorNotification() {
    return '.oxd-input-field-error-message'
  }

  get usernameErrorNotification() {
    return `//*[@placeholder="Username"]/../following-sibling::*[contains(@class, 'oxd-input-field-error-message')]`
  }

  get passwordErrorNotification() {
    return `//*[@placeholder="Password"]/../following-sibling::*[contains(@class, 'oxd-input-field-error-message')]`
  }

  async fillCreds(username, password) {
    if(username)  {
      await this.fillField(this["Username Field"], username);
    }
    if(password) {
      await this.fillField(this["Password Field"], password);
    }
  }

  async login(username, password) {
    await this.fillCreds(username, password);
    await this.doClick(this.loginButton);
  }
}

export default new LoginPage();
