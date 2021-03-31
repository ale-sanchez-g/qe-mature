describe('Express App', () => {
    beforeEach(() => {
        cy.request('/api').as('api')
      })
  it('should display API', () => {
    cy.get('@api').should((response) => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
  });
});