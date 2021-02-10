describe('next', () => {
  beforeEach(() => cy.visit('/'))

  it('should display welcome message', () => {
    cy.contains('DreamStack')
  })
})
