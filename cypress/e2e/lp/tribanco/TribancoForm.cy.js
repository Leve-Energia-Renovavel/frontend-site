const { dummyForm } = require("../../../../tests/helpers/testHelpers");

describe('Complete Form Tribanco', () => {
  it('should complete the form and navigate to a new page', () => {
    const baseUrl = Cypress.config('baseUrl');

    cy.visit(`https://new-homolog-cliente.leveenergia.com.br/lp/tribanco/`);

    cy.get('input[placeholder="Nome Completo"]').type(dummyForm.user.name);
    cy.get('input[placeholder="Telefone"]').type(dummyForm.user.phone);
    cy.get('input[placeholder="E-mail"]').type(dummyForm.user.email);
    cy.get('input[placeholder="E-mail Corporativo"]').type(dummyForm.user.email);
    cy.get('input[placeholder="CEP"]').type(dummyForm.cep.success.beloHorizonte);

    cy.get('.MuiSlider-rail').then(($slider) => {
      const sliderWidth = $slider.width();
      const sliderHeight = $slider.height();
      const centerX = sliderWidth / 2;
      const centerY = sliderHeight / 2;

      cy.wrap($slider).click(centerX, centerY);
    });

    cy.intercept('POST', `${dummyForm.urls.stepOne}`).as('postRequest');

    cy.get('button[type="submit"]').contains('Calcular desconto').click();

    cy.url().should('include', `https://new-homolog-cliente.leveenergia.com.br/signup/?uuid=`).wait(3000);
  });
});
