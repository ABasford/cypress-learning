/// <reference types="cypress" />

describe('Using cy.request()', () => {
    it.skip('to login and retrieve the token', () => {
        cy.request('POST', '/login', {
            username: 'maurice.de.beijer',
            password: 'p@ssw0rd',
        })
        .its('body.token')
        .then((token) => {
            cy.log('Token: ${token}');
        });
    })
    
    it('to search for Douglas Adams', () => {
        cy.request('https://www.googleapis.com/books/v1/volumes?q=inauthor:Douglas+Adams&maxResults=25&langRestrict=en&filter=ebooks')
          .as('response');
        cy.get('@response').its('body.kind').should('equal', 'books#volumes');
        cy.get('@response').its('body.totalItems').should('be.greaterThan', 350);
        cy.get('@response').its('body.items').should('have.length', 25);
        cy.get('@response').its('body.items.0.volumeInfo.title').should('exist');
        cy.get('@response').its('body.items.0.volumeInfo.authors').should('exist');
    })
});