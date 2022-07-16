describe('Basic site navigation works', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy-navigation-links]').first().as('nav');
  });

  it('Navigation has at least link', () => {
    cy.get('@nav').contains('a');
  });

  it('Can navigate to now page', () => {
    cy.get('@nav').contains('now').click();
    cy.url().should('include', 'now');
  });
  it('Navigates back to home', () => {
    cy.get('[aria-label="Link to homepage"]').click();
    cy.url().should('include', '/');
  });
});

export {};
