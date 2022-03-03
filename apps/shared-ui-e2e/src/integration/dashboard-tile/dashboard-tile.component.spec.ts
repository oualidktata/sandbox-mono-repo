describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dashboardtilecomponent--primary&args=settings;'));
  it('should render the component', () => {
    cy.get('pwc-dashboard-tile').should('exist');
  });
});