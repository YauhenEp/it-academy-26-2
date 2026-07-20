import MainPage from "../page-object/main-page";

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.selectDropdownOption(9);
    cy.xpath('//h1').should('have.text', 'Misc')
    cy.doClick(MainPage.dropdownToggle)
    cy.doClick(MainPage.getOptionByNumber(3))
    cy.get('.pull-right > li > a').click()
    cy.origin('https://github.com/', () => {
      cy.get(`[data-content="Issues"]`).click()
    })
  })
})