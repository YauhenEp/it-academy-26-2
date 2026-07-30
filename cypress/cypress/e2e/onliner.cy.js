describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.onliner.by/');
    cy.get('#submit-button').click();
    cy.wait(2000);
    cy.get('.header-style__underlay').click();
    cy.get('.header-style__bottom .header-style__link.header-style__link_primary').click();
    cy.on('uncaught:exception', (err) => {
      console.log(err.message);
      if (err.message.includes('your application code') || err.message === 'null') {
        return false;
      }
    });
    cy.origin('https://profile.onliner.by', () => {
      cy.get('.auth-button_alter-special:not(.auth-button_active)').click()
    })
  })
})