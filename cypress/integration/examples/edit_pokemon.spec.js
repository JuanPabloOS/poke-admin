describe('Edit pokemon test', function () {
  it('should edit a pokemon', function () {
    cy.visit('http://localhost:3000/');
    cy.contains('charmander').click();
    cy.get('[data-cy=button-edit-pokemon]').click();
    cy.get('form').within(() => {
      cy.get('input[name="name"]').type('Doberman');
      cy.get('input[name="height"]').type('50');
      cy.get('input[name="weight"]').type('50');
      cy.get('select[name="fstType"]').select('ghost');
      cy.get('select[name="sndType"]').select('');
      cy.get('input[name="hp"]').type('50');
      cy.get('input[name="attack"]').type('50');
      cy.get('input[name="defense"]').type('50');
      cy.get('input[name="spAttack"]').type('50');
      cy.get('input[name="spDefense"]').type('50');
      cy.get('input[name="speed"]').type('50');
    });
    cy.get('form').submit();
  });
});
