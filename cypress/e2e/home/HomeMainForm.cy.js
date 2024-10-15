const { createHomeTestData, createMainFormTestData } = require("../../../tests/builder/home/scenarioBuilder");
const { generateEmail } = require("../../../tests/helpers/dummyDataHelper");

const location = "home"

describe('Complete Home Main Form', () => {

  it('should complete the form and navigate to out-of-range (FAILURE scenario 1)', () => {

    const scenario = "fail-region"
    const allTestData = createMainFormTestData(scenario)
    const { path, name, email, phone, cep, requestUrl, destinationPattern } = allTestData

    cy.task('log', `--- START testing for ${location} ---`);
    cy.task('log', `TEST DATA: ${JSON.stringify(allTestData)}`)

    cy.visit(path);
    cy.get('.homeMainBannerButton').contains('Calcular meu desconto').click();
    cy.get('input[placeholder="Nome completo "]').first().type(name);
    cy.get('input[placeholder="Telefone"]').first().type(phone);
    cy.get('input[placeholder="E-mail "]').first().type(email);
    cy.get('input[placeholder="CEP"]').first().type(cep);

    cy.get('.homeSimulatorContainer .MuiSlider-rail').first().then(($slider) => {
      const sliderWidth = $slider.width();
      const sliderHeight = $slider.height();
      const centerX = sliderWidth / 2;
      const centerY = sliderHeight / 2;

      cy.wrap($slider).click(centerX, centerY);
    });

    cy.get('button[type="submit"]').eq(1).contains('Calcular').click();

    cy.intercept('POST', `${requestUrl}`).as('postRequest');
    cy.wait('@postRequest').then((interception) => {
      cy.task('log', `- PAYLOAD: ${JSON.stringify(interception?.request?.body)}`);
      cy.task('log', `- RESPONSE: ${JSON.stringify(interception?.response?.body)}`);
    });

    cy.url().should('contains', destinationPattern)
    cy.task('log', `--- END tests for ${location.toUpperCase()} ---`)
  });

  it('should complete the form and navigate to out-of-range (FAILURE scenario 2)', () => {

    const scenario = "fail-region"
    const allTestData = createMainFormTestData(scenario)
    const { path, name, email, phone, cep, requestUrl, destinationPattern } = allTestData

    cy.task('log', `--- START testing for ${location} ---`);
    cy.task('log', `TEST DATA: ${JSON.stringify(allTestData)}`)

    cy.visit(path);
    cy.get('.homeMainBannerButton').contains('Calcular meu desconto').click();
    cy.get('input[placeholder="Nome completo "]').first().type(name);
    cy.get('input[placeholder="Telefone"]').first().type(phone);
    cy.get('input[placeholder="E-mail "]').first().type(email);
    cy.get('input[placeholder="CEP"]').first().type(cep);

    cy.get('.homeSimulatorContainer .MuiSlider-rail').first().then(($slider) => {
      const sliderWidth = $slider.width();
      const sliderHeight = $slider.height();
      const centerX = sliderWidth / 2;
      const centerY = sliderHeight / 2;

      cy.wrap($slider).click(centerX, centerY);
    });

    cy.get('button[type="submit"]').eq(1).contains('Calcular').click();

    cy.intercept('POST', `${requestUrl}`).as('postRequest');
    cy.wait('@postRequest').then((interception) => {
      cy.task('log', `- PAYLOAD: ${JSON.stringify(interception?.request?.body)}`);
      cy.task('log', `- RESPONSE: ${JSON.stringify(interception?.response?.body)}`);
    });

    cy.url().should('contains', destinationPattern)
    cy.task('log', `--- END tests for ${location.toUpperCase()} ---`)
  });


  it('should complete the form and navigate to out-of-range (FAILURE scenario 3)', () => {

    const scenario = "fail-region"
    const allTestData = createMainFormTestData(scenario)
    const { path, name, email, phone, cep, requestUrl, destinationPattern } = allTestData

    cy.task('log', `--- START testing for ${location} ---`);
    cy.task('log', `TEST DATA: ${JSON.stringify(allTestData)}`)

    cy.visit(path);
    cy.get('.homeMainBannerButton').contains('Calcular meu desconto').click();
    cy.get('input[placeholder="Nome completo "]').first().type(name);
    cy.get('input[placeholder="Telefone"]').first().type(phone);
    cy.get('input[placeholder="E-mail "]').first().type(email);
    cy.get('input[placeholder="CEP"]').first().type(cep);

    cy.get('.homeSimulatorContainer .MuiSlider-rail').first().then(($slider) => {
      const sliderWidth = $slider.width();
      const sliderHeight = $slider.height();
      const centerX = sliderWidth / 2;
      const centerY = sliderHeight / 2;

      cy.wrap($slider).click(centerX, centerY);
    });

    cy.get('button[type="submit"]').eq(1).contains('Calcular').click();

    cy.intercept('POST', `${requestUrl}`).as('postRequest');
    cy.wait('@postRequest').then((interception) => {
      cy.task('log', `- PAYLOAD: ${JSON.stringify(interception?.request?.body)}`);
      cy.task('log', `- RESPONSE: ${JSON.stringify(interception?.response?.body)}`);
    });

    cy.url().should('contains', destinationPattern)
    cy.task('log', `--- END tests for ${location.toUpperCase()} ---`)
  })

  it('should complete the form and navigate to out-of-range (FAILURE scenario 4)', () => {

    const scenario = "fail-region"
    const allTestData = createMainFormTestData(scenario)
    const { path, name, email, phone, cep, requestUrl, destinationPattern } = allTestData

    cy.task('log', `--- START testing for ${location} ---`);
    cy.task('log', `TEST DATA: ${JSON.stringify(allTestData)}`)

    cy.visit(path);
    cy.get('.homeMainBannerButton').contains('Calcular meu desconto').click();
    cy.get('input[placeholder="Nome completo "]').first().type(name);
    cy.get('input[placeholder="Telefone"]').first().type(phone);
    cy.get('input[placeholder="E-mail "]').first().type(email);
    cy.get('input[placeholder="CEP"]').first().type(cep);

    cy.get('.homeSimulatorContainer .MuiSlider-rail').first().then(($slider) => {
      const sliderWidth = $slider.width();
      const sliderHeight = $slider.height();
      const centerX = sliderWidth / 2;
      const centerY = sliderHeight / 2;

      cy.wrap($slider).click(centerX, centerY);
    });

    cy.get('button[type="submit"]').eq(1).contains('Calcular').click();

    cy.intercept('POST', `${requestUrl}`).as('postRequest');
    cy.wait('@postRequest').then((interception) => {
      cy.task('log', `- PAYLOAD: ${JSON.stringify(interception?.request?.body)}`);
      cy.task('log', `- RESPONSE: ${JSON.stringify(interception?.response?.body)}`);
    });

    cy.url().should('contains', destinationPattern)
    cy.task('log', `--- END tests for ${location.toUpperCase()} ---`)
  })


  it('should complete the form and navigate to signup (SUCCESS scenario)', () => {

    const scenario = "success"
    const allTestData = createMainFormTestData(scenario)
    const { path, name, email, phone, cep, requestUrl, destinationPattern } = allTestData

    cy.task('log', `--- START testing for ${location} ---`);
    cy.task('log', `TEST DATA: ${JSON.stringify(allTestData)}`)

    cy.visit(path);
    cy.get('.homeMainBannerButton').contains('Calcular meu desconto').click();
    cy.get('input[placeholder="Nome completo "]').first().type(name);
    cy.get('input[placeholder="Telefone"]').first().type(phone);
    cy.get('input[placeholder="E-mail "]').first().type(email);
    cy.get('input[placeholder="CEP"]').first().type(cep);

    cy.get('.homeSimulatorContainer .MuiSlider-rail').first().then(($slider) => {
      const sliderWidth = $slider.width();
      const sliderHeight = $slider.height();
      const centerX = sliderWidth / 2;
      const centerY = sliderHeight / 2;

      cy.wrap($slider).click(centerX, centerY);
    });

    cy.get('button[type="submit"]').eq(1).contains('Calcular').click();

    cy.intercept('POST', `${requestUrl}`).as('postRequest');
    cy.wait('@postRequest').then((interception) => {
      cy.task('log', `- PAYLOAD: ${JSON.stringify(interception?.request?.body)}`);
      cy.task('log', `- RESPONSE: ${JSON.stringify(interception?.response?.body)}`);
    });

    cy.url().should('contains', destinationPattern)
    cy.task('log', `--- END tests for ${location.toUpperCase()} ---`)
  });


});
