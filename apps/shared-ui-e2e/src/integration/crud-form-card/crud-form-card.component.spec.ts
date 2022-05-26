describe('shared-ui', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=crudformcardcomponent--primary&args=settings;readyToSave:false;'
    )
  );
  it('should render the component', () => {
    cy.get('pwc-crud-form-card').should('exist');
  });
});
