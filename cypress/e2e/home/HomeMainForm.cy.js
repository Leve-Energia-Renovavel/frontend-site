const { createTestData } = require("../../../tests/builder/home/scenarioBuilder");

const location = "home"

describe('Complete Home Main Form', () => {

  it('should complete the form and navigate to out-of-range (FAILURE scenario)', () => {

    const scenario = "fail-region"
    const allTestData = createTestData(scenario)
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
    });

    cy.url().should('contains', destinationPattern)
    cy.task('log', `--- END tests for ${location.toUpperCase()} ---`)
  });


  it('should complete the form and navigate to signup (SUCCESS scenario)', () => {

    const scenario = "success"
    const allTestData = createTestData(scenario)
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
    });

    cy.url().should('contains', destinationPattern)
    cy.task('log', `--- END tests for ${location.toUpperCase()} ---`)
  });


});
