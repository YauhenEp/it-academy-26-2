import { Base } from "./base";

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
      await this.page.locator(this.usernameField).fill(username);
    }
    if(password) {
      await this.page.locator(this.passwordField).fill(password);
    }
  }

  async login(username, password) {
    await this.fillCreds(username, password);
    await this.page.locator(this.loginButton).click();
  }

  // BAD PRACTICE !!! CODE DUPLICATION
  // async loginWithValidCreds() {
  //   await this.page.locator(this.usernameField).fill('username');
  //   await this.page.locator(this.passwordField).fill('password');
  //   await this.page.locator(this.loginButton).click();
  // }

  // async loginWithInvalidCreds() {
  //   await this.page.locator(this.usernameField).fill('username1234124312');
  //   await this.page.locator(this.passwordField).fill('password12412');
  //   await this.page.locator(this.loginButton).click();
  // }

  // async loginWithEmptyCreds() {
  //   await this.page.locator(this.usernameField).fill('');
  //   await this.page.locator(this.passwordField).fill('');
  //   await this.page.locator(this.loginButton).click();
  // }
}

export {LoginPage}