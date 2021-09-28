describe('Heading', () => {
    it('has the right title', () => {
        cy.visit('http://172.31.89.82:5000/example-1')

        cy.get('h1')
            .invoke('text')
            .should("equal", "Awesome Web Application")
        Cypress.Screenshot.defaults({ capture: 'fullPage' });
        cy.screenshot();

    });

});

