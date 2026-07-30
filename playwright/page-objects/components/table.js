import { Base } from '../base';

class Table extends Base {
  constructor(page) {
    super(page);
  }

  get tableHeaders() {
    return this.page.locator('.oxd-table-header .oxd-table-header-cell');
  }

  async getTableHeaderByName(headerName) {
    return this.page.locator('.oxd-table-header .oxd-table-header-cell', { hasText: headerName });
  }

  async getCheckboxByRowNumber(tableRowNumber) {
    return this.page.locator('.oxd-table-card').nth(tableRowNumber).locator('.oxd-checkbox-input--active');
  }

  async getTrashIconByRowNumber(tableRowNumber) {
    return this.page.locator('.oxd-table-card').nth(tableRowNumber).locator('.bi-trash');
  }

  async getEditButtonByRowNumber(tableRowNumber) {
    return this.page.locator('.oxd-table-card').nth(tableRowNumber).locator('.bi-pencil-fill');
  }

  async getCheckboxByUsername(userName) {
    return this.page.locator(`//*[text()='${userName}']//ancestor::*[contains(@class,'oxd-table-row')]//*[contains(@class,'oxd-checkbox-input--active')]`);
  }

  async getTrashIconByUsername(userName) {
    return this.page.locator(`//*[text()='${userName}']//ancestor::*[contains(@class,'oxd-table-row')]//*[contains(@class, 'bi-trash')]`);
  }

  async getEditButtonByUsername(userName) {
    return this.page.locator(`//*[text()='${userName}']//ancestor::*[contains(@class,'oxd-table-row')]//*[contains(@class, 'bi-pencil-fill')]`);
  }

  get addButton() {
    return this.page.locator('.oxd-button--secondary', { hasText: 'Add' });
  }

  get deleteSelectedButton() {
    return this.page.locator('.oxd-button--label-danger.orangehrm-horizontal-margin');
  }

  get deleteButton() {
    return this.page.locator('.orangehrm-dialog-popup .oxd-button--label-danger');
  }

  // BAD PRACTICE.
  // async clickAddButton() {
  //   await this.clickElement(await this.addButton);
  // }

  // async deleteSession() {
  //   await this.clickElement(await this.deleteSelectedButton);
  // }

  // async clickDeleteButton() { 
  //   await this.clickElement(await this.deleteButton);
  // }

  // async deleteSelected() {
  //   await this.clickElement(await this.deleteSelectedButton);
  // }

  async checkCheckboxesByRowNumbers(tableRowNumbers) {
    await this.page.waitForLoadState('domcontentloaded');
    for (const rowNumber of tableRowNumbers) {
      await (await this.getCheckboxByRowNumber(rowNumber)).click();
    }
  }

  async checkCheckboxesByUsernames(userNames) {
    await this.page.waitForLoadState('domcontentloaded');
    for (const userName of userNames) {
      await (await this.getCheckboxByUsername(userName)).click();
    }
  }

  async deleteItemFromTableByRowNumber(tableRowNumber) {
    await (await this.getTrashIconByRowNumber(tableRowNumber)).click();
    await this.clickElement(await this.deleteButton);
  }

  async deleteItemFromTableById(tableItemId) {
    await (await this.getTrashIconByUsername(tableItemId)).click();
    await this.clickElement(await this.deleteButton);
  }
}

export { Table };