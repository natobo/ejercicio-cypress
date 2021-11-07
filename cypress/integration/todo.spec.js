describe('TODOS page', () => {
  it('should add a new TODO', () => {
    cy.visit('todo')
      .get('input')
      .type('new TODO')
      .get('button[type=submit]')
      .click()
      .get('.list-group > .list-group-item:first > p')
      .first()
      .should('contain', '1. new TODO');
  });

  it('should toogle a previous TODO', () => {
    cy.visit('/todo')
      .get('input')
      .type('new TODO')
      .get('button[type=submit]')
      .click()
      .get('.list-group > .list-group-item:first > p')
      .first()
      .click()
      .should('have.class', 'complete');
  });
  // TODO DELETE VALIDATION ITEM EXERCISE
  // First it creates an item and after that it deletes the item
  it('should delete a TODO', () => {
    cy.visit('todo')
      .get('input')
      .type('new TODO')
      .get('button[type=submit]')
      .click()
      .get('.list-group > .list-group-item:first > p')
      .first()
      .should('contain', '1. new TODO')
      .get('.list-group > .list-group-item:first > button')
      .click()
      .get('.list-group')
      .find('.list-group-item')
      .should('have.length', 0)
  });
});
