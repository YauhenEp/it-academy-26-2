import Base from "./base";

class MainPage extends Base {
  constructor() {
    super();
    this.mainElement = () => cy.get('#commands');
  }

  get header() {
    return cy.get('#commands h2');
  } 

  get dropdownToggle() {
    return cy.get('.dropdown-toggle');
  }

  get miscOption() {
    return cy.get('.dropdown-menu > :nth-child(9) > a');
  }

  getOptionByNumber( optionNumber) {
    return cy.get(`.dropdown-menu > :nth-child(${optionNumber}) > a`);
  }  

  selectDropdownOption(optionNumber) {
    this.dropdownToggle.click();
    this.getOptionByNumber(optionNumber).click();
  }
}

export default new MainPage();