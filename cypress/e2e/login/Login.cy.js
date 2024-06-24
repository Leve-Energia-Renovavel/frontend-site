const { createLoginTestData } = require("../../../tests/builder/login/scenarioBuilder");

describe(`Complete Login`, () => {
    it('should complete the login and navigate to dashboard (SUCCESS scenario)', () => {

        const scenario = "success"
        const allTestData = createLoginTestData(scenario)
        const { path, email, password, requestUrl, destinationPattern } = allTestData

        cy.task('log', `--- START testing for LOGIN ---`);
        cy.task('log', `TEST DATA: ${JSON.stringify(allTestData)}`)

        cy.visit(path);

        cy.get('input[placeholder="E-mail"]').type(email);
        cy.get('input[placeholder="Senha"]').type(password);

        cy.intercept('POST', `${requestUrl}`).as('login');

        cy.get('.MuiButton-root').contains('Entrar').click();

        cy.wait('@login').then((interception) => {
            cy.task('log', `- PAYLOAD: ${JSON.stringify(interception?.request?.body)}`);
            cy.task('log', `- RESPONSE: ${JSON.stringify(interception?.response?.body)}`);
        });

        cy.url().should('contains', destinationPattern)
        cy.task('log', `--- END tests for LOGIN ---`)
    });
});
