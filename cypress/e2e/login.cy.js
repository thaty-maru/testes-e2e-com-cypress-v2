describe('Login', () => {
	it('successfully logs in', () => {
		const emailAddress = Cypress.env('USER_EMAIL')
		const password = Cypress.env('USER_PASSWORD')
		cy.guiLogin(emailAddress, password)

		cy.contains('h1', 'Your Notes').should('be.visible')
		cy.contains('a', 'Create a new note').should('be.visible')
	})
})