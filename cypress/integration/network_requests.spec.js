/// <reference types="cypress" />

context('Network Requests', () => {
  beforeEach(() => {
    cy.request('/api').as('api');
  })

  // Manage HTTP requests in your app

  it('Validate API', () => {
    cy.get('@api').should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('message', 'Welcome to mature-api!')
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
  })
})