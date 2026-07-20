import { $ } from '@wdio/globals'
import Base from './base.js';

class LoginPage extends Base {

  constructor(page) {
    super(page)
  }

  get usernameField() {
    return '[name="username"]';
  }

  get passwordField() {
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
      await this.fillField(this.usernameField, username);
    }
    if(password) {
      await this.fillField(this.passwordField, password);
    }
  }

  async login(username, password) {
    await this.fillCreds(username, password);
    await this.doClick(this.loginButton);
  }
}

export default new LoginPage();
