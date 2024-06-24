const { createHomeTestData } = require("../../tests/builder/home/scenarioBuilder");
const { createSignupTestData } = require("../../tests/builder/signup/scenarioBuilder");

const location = "home"
var uuid = null

describe('Complete Home Main Form', () => {

  it('should complete the form and navigate to signup (SUCCESS scenario)', () => {

    const scenario = "success"
    const allTestData = createHomeTestData(scenario)
    const { path, name, email, phone, cep, requestUrl, destinationPattern } = allTestData

    cy.task('log', `--- START testing for ${location} ---`);
    cy.task('log', `TEST DATA: ${JSON.stringify(allTestData)}`)

    cy.visit(path);
    cy.get('input[placeholder="Nome Completo "]').type(name);
    cy.get('input[placeholder="Telefone"]').type(phone);
    cy.get('input[placeholder="E-mail "]').type(email);
    cy.get('input[placeholder="CEP"]').type(cep);

    cy.get('.MuiSlider-rail').then(($slider) => {
      const sliderWidth = $slider.width();
      const sliderHeight = $slider.height();
      const centerX = sliderWidth / 2;
      const centerY = sliderHeight / 2;

      cy.wrap($slider).click(centerX, centerY);
    });

    cy.get('button[type="submit"]').contains('Calcular desconto').click();

    cy.intercept('POST', `${requestUrl}`).as('postRequest');
    cy.wait('@postRequest').then((interception) => {
      cy.task('log', `- PAYLOAD: ${JSON.stringify(interception?.request?.body)}`);
      cy.task('log', `- RESPONSE: ${JSON.stringify(interception?.response?.body)}`);
      uuid = interception?.response?.body?.uuid
    });

    cy.url().should('contains', destinationPattern)
    cy.task('log', `--- END tests for ${location.toUpperCase()} ---`)
  });





  it('should complete the signup form and go to contract (SUCCESS scenario)', () => {

    const scenario = "success"
    const allTestData = createSignupTestData(scenario)
    const { path, rg, cpf, birthDate, number, complement, installationNumber, requestUrl, destinationPattern } = allTestData;

    cy.task('log', `--- START testing for ${location} ---`);
    cy.task('log', `TEST DATA: ${JSON.stringify(allTestData)}`)

    cy.visit(path + uuid);

    cy.get('input[placeholder="RG"]').type(rg);
    cy.get('input[placeholder="CPF"]').type(cpf);
    cy.get('input[placeholder="Data de Nascimento"]').type(birthDate);

    cy.get('#maritalStatus').click();
    cy.get('li[role="option"]').first().click();

    cy.get('#nationality').click();
    cy.get('li[role="option"]').first().click();

    cy.get('#profession').click();
    cy.get('li[role="option"]').first().click();

    cy.get('input[placeholder="Nº"]').type(number);
    cy.get('input[placeholder="Complemento"]').type('casa dos fundos');
    cy.get('input[placeholder="Número de Instalação"]').type(installationNumber);

    cy.get('input[type="checkbox"]').each(($checkbox, index) => {
      if (index < 3) {
        cy.wrap($checkbox).check({ force: true });
      }
    });

    // Click the submit button
    cy.get('button[type="submit"]').contains('Continuar').click();

    cy.intercept('POST', `${requestUrl}`).as('postRequest');
    cy.wait('@postRequest', { timeout: 20000 }).then((interception) => {
      cy.task('log', `- PAYLOAD: ${JSON.stringify(interception?.request?.body)}`);
      cy.task('log', `- RESPONSE: ${JSON.stringify(interception?.response?.body)}`);
    });

    cy.url().should('contains', destinationPattern);
    cy.task('log', `--- END tests for ${location.toUpperCase()} ---`)

  })

});
