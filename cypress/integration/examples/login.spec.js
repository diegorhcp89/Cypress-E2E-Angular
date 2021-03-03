describe('Conduit Login', () => {
    it('Login sucesso', () => {
        cy.login('/testecypress@testecypress.com', 'testecypress')
        cy.get('.nav-item:nth-child(4) > .nav-link').click()
        cy.get('.btn:nth-child(s)').click()
        cy.url().should('contain', '/settings')
    })
})