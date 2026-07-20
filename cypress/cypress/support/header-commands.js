import MainPage from "../page-object/main-page";

Cypress.Commands.add('selectDropdownOption', (optionNumber) => {
    MainPage.dropdownToggle.click();
    MainPage.getOptionByNumber(optionNumber).click();
});