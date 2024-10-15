const { generateEmail } = require("../../../tests/helpers/dummyDataHelper");

const location = "home"

const testingCEPs = [
    { cep: "01001-000", expect: "fail", label: "São Paulo" },
    { cep: "11310-000", expect: "fail", label: "São Vicente" },
    { cep: "17490-015", expect: "success", label: "Piratininga" },
    { cep: "13960-101", expect: "success", label: "Socorro" },
    { cep: "11410-000", expect: "fail", label: "Guarujá" },
    { cep: "30110-000", expect: "success", label: "Belo Horizonte" },
    { cep: "50010-000", expect: "fail", label: "Recife" },
    { cep: "20010-000", expect: "fail", label: "Rio de Janeiro" },
    { cep: "49000-000", expect: "fail", label: "Aracaju" },
    { cep: "74000-000", expect: "fail", label: "Goiânia" }
];

const failResult = `/fail/out-of-range`;
const successResult = `/signup/?uuid=`;

describe('Complete Stress Tests for HomeMainForm', () => {

    testingCEPs.forEach(({ cep, expect, label }) => {
        it(`should test with CEP ${cep} (${label.toUpperCase()}) expecting ${expect.toUpperCase()} result`, () => {

            const path = "/"
            const name = "Marcos Vinicius Ferreira"
            const email = generateEmail(expect, "stress")
            const phone = "11989332002"
            const requestUrl = `https://backofficehomolog.leveenergia.com.br/api/sign-up/step-one`;

            const allTestData = { path, name, email, phone, cep, requestUrl }

            cy.task('log', `--- START testing for ${location} ---`);
            cy.task('log', `TEST DATA: ${JSON.stringify(allTestData)}`)

            cy.visit(path);
            cy.get('.homeMainBannerButton').contains('Calcular').click();
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

            // Intercept the POST request and log the result
            cy.intercept('POST', requestUrl).as('postRequest');
            cy.wait('@postRequest').then((interception) => {
                cy.task('log', `- PAYLOAD: ${JSON.stringify(interception?.request?.body)}`);
                cy.task('log', `- RESPONSE: ${JSON.stringify(interception?.response?.body)}`);
            });

            // Verify the URL based on the result
            if (expect === "success") {
                cy.url().should('contain', successResult);
            } else {
                cy.url().should('contain', failResult);
            }
        });
    });
});
