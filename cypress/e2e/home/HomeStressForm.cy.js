const { generateEmailForStressTesting } = require("../../../tests/helpers/dummyDataHelper");

const FAILURE = "failure"
const SUCCESS = "success"

const usertypes = [
    { type: "PF", label: "Residência" },
    { type: "PJ", label: "Empresa" }
];

const testingCEPs = [
    { cep: "49000-000", expect: FAILURE, cityName: "Aracaju" },
    { cep: "30110-000", expect: SUCCESS, cityName: "Belo Horizonte" },
    { cep: "74000-000", expect: FAILURE, cityName: "Goiânia" },
    { cep: "11410-000", expect: SUCCESS, cityName: "Guarujá" },
    { cep: "17490-000", expect: SUCCESS, cityName: "Piratininga" },
    { cep: "50010-000", expect: SUCCESS, cityName: "Recife" },
    { cep: "20010-000", expect: FAILURE, cityName: "Rio de Janeiro" },
    { cep: "13960-000", expect: SUCCESS, cityName: "Socorro" },
    { cep: "01001-000", expect: FAILURE, cityName: "São Paulo" },
    { cep: "11310-000", expect: SUCCESS, cityName: "São Vicente" }
];

describe('Complete Stress Tests for HomeMainForm', () => {

    usertypes.forEach(({ type, label }) => {
        testingCEPs.forEach(({ cep, expect, cityName }) => {
            it(`should test CEP ${cep} (${cityName.toUpperCase()}) for type ${type} expecting ${expect.toUpperCase()} result`, () => {

                const location = "home"
                const path = "/"
                const name = "Marcos Vinicius Ferreira"
                const email = generateEmailForStressTesting(expect, "stress", type)
                const phone = "11989332002"
                const requestUrl = `https://backofficehomolog.leveenergia.com.br/api/sign-up/step-one`;

                const failResult = `/fail/out-of-range`;
                const successResult = `/signup/?uuid=`;

                const allTestData = { path, name, email, phone, cep, requestUrl }

                cy.task('log', `--- START testing for ${location} ---`);
                cy.task('log', `TEST DATA: ${JSON.stringify(allTestData)}`)

                cy.visit(path);
                cy.get('.homeMainBannerButton').contains('Calcular').click();
                cy.get('input[placeholder="Nome completo "]').first().type(name);
                cy.get('input[placeholder="Telefone"]').first().type(phone);
                cy.get('input[placeholder="E-mail "]').first().type(email);
                cy.get('input[placeholder="CEP"]').first().type(cep);

                // Select by usertype 
                cy.contains('button', label).click();

                cy.get('.homeSimulatorContainer .MuiSlider-rail').first().then(($slider) => {
                    const sliderWidth = $slider.width();
                    const sliderHeight = $slider.height();
                    const centerX = sliderWidth / 2;
                    const centerY = sliderHeight / 2;

                    cy.wrap($slider).click(centerX, centerY);
                });

                cy.get('button[type="submit"]').eq(1).contains('Calcular').click();

                // Intercept the POST request and log the result
                cy.intercept('POST', requestUrl).as('postRequest');
                cy.wait('@postRequest').then((interception) => {
                    cy.task('log', `- PAYLOAD: ${JSON.stringify(interception?.request?.body)}`);
                    cy.task('log', `- RESPONSE: ${JSON.stringify(interception?.response?.body)}`);
                });

                // Verify the URL based on the result
                if (expect === SUCCESS) {
                    cy.url().should('contain', successResult);
                } else {
                    cy.url().should('contain', failResult);
                }
            });
        });
    })
});
