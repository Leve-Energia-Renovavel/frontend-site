import { destinationPattern, dummyForm, dummyFormLP, dummyPath, dummyUrl } from "../../helpers/dummyDataHelper";

function successDefaultTemplate() {
    return {
        name: dummyForm.user.name,
        phone: dummyForm.user.phone,
        cep: dummyForm.cep.success.beloHorizonte,
        requestUrl: dummyUrl.lpStepOne,
        destinationPattern: destinationPattern.signup,
    };
}
function failureDefaultTemplate() {
    return {
        name: dummyForm.user.name,
        phone: dummyForm.user.phone,
        cep: dummyForm.cep.fail.saoPauloCapitalSecond,
        requestUrl: dummyUrl.lpStepOne,
        destinationPattern: destinationPattern.outOfRange,
    };
}

export const successDataHelper = {
    martins: () => ({
        ...successDefaultTemplate(),
        path: dummyPath.lp.martins,
        email: dummyFormLP.martins.email,
        registration: dummyForm.user.registration
    }),
    tribanco: () => ({
        ...successDefaultTemplate(),
        path: dummyPath.lp.tribanco,
        email: dummyFormLP.tribanco.email,
    }),
    tim: () => ({
        ...successDefaultTemplate(),
        path: dummyPath.lp.tim,
        email: dummyFormLP.tim.email,
    }),
    allya: () => ({
        ...successDefaultTemplate(),
        path: dummyPath.lp.allya,
        email: dummyFormLP.allya.email,
    }),
    localiza: () => ({
        ...successDefaultTemplate(),
        path: dummyPath.lp.localiza,
        email: dummyFormLP.localiza.email,
    }),
    yduqs: () => ({
        ...successDefaultTemplate(),
        path: dummyPath.lp.yduqs,
        email: dummyFormLP.yduqs.email,
    }),
    empresas: () => ({
        ...successDefaultTemplate(),
        path: dummyPath.lp.empresas,
        email: dummyFormLP.empresas.email,
        companyName: dummyForm.company.name,
        requestUrl: dummyUrl.stepOne    // Overwriting the default requestUrl
    }),
    novosClientes: () => ({
        ...successDefaultTemplate(),
        path: dummyPath.lp.novosClientes,
        email: dummyFormLP.novosClientes.email,
        requestUrl: dummyUrl.stepOne    // Overwriting the default requestUrl
    })
};

export const failureDataHelper = {
    martins: () => ({
        ...failureDefaultTemplate(),
        path: dummyPath.lp.martins,
        email: dummyFormLP.martins.email,
        registration: dummyForm.user.registration
    }),
    tribanco: () => ({
        ...failureDefaultTemplate(),
        path: dummyPath.lp.tribanco,
        email: dummyFormLP.tribanco.email,
    }),
    tim: () => ({
        ...failureDefaultTemplate(),
        path: dummyPath.lp.tim,
        email: dummyFormLP.tim.email,
    }),
    allya: () => ({
        ...failureDefaultTemplate(),
        path: dummyPath.lp.allya,
        email: dummyFormLP.allya.email,
    }),
    localiza: () => ({
        ...failureDefaultTemplate(),
        path: dummyPath.lp.localiza,
        email: dummyFormLP.localiza.email,
    }),
    yduqs: () => ({
        ...failureDefaultTemplate(),
        path: dummyPath.lp.yduqs,
        email: dummyFormLP.yduqs.email,
    }),
    empresas: () => ({
        ...failureDefaultTemplate(),
        path: dummyPath.lp.empresas,
        email: dummyFormLP.empresas.email,
        companyName: dummyForm.company.name,
        requestUrl: dummyUrl.stepOne    // Overwriting the default requestUrl
    }),
    novosClientes: () => ({
        ...failureDefaultTemplate(),
        path: dummyPath.lp.novosClientes,
        email: dummyFormLP.novosClientes.email,
        requestUrl: dummyUrl.stepOne    // Overwriting the default requestUrl
    })
};

export const createTestData = (scenario, partner) => {
    if (scenario === "success") return successDataHelper[partner]()
    if (scenario === "failure") return failureDataHelper[partner]()
}