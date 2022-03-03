describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=quantityselectorcomponent--primary'));
  it('should render the component', () => {
    cy.get('pwc-quantity-selector').should('exist');
  });
});