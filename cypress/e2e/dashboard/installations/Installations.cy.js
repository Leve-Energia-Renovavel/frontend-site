const { addNewInstallationTestData } = require("../../../../tests/builder/dashboard/installations/scenarioBuilder");

describe(`Complete Login and Add New Installation`, () => {
    it('should complete the login, access dashboard and add a new installation (SUCCESS scenario)', () => {

        const scenario = "success"
        const allTestData = addNewInstallationTestData(scenario)
        const { path, email, password, requestUrl, destinationPattern, cep, cost } = allTestData

        cy.task('log', `--- START testing to ADD NEW INSTALLATION ---`);
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

        cy.get('.addInstallation').contains('Novo endereço').click();

        cy.get('input[placeholder="CEP"]').type(cep);
        cy.get('input[placeholder="Custo mensal R$"]').type(cost);


        cy.task('log', `--- END tests to ADD NEW INSTALLATION ---`)
    });

});
