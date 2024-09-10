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
        email: dummyFormLP.martins.success.email,
        registration: dummyForm.user.registration
    }),
    tribanco: () => ({
        ...successDefaultTemplate(),
        path: dummyPath.lp.tribanco,
        email: dummyFormLP.tribanco.success.email,
    }),
    tim: () => ({
        ...successDefaultTemplate(),
        path: dummyPath.lp.tim,
        email: dummyFormLP.tim.success.email,
    }),
    allya: () => ({
        ...successDefaultTemplate(),
        path: dummyPath.lp.allya,
        email: dummyFormLP.allya.success.email,
    }),
    localiza: () => ({
        ...successDefaultTemplate(),
        path: dummyPath.lp.localiza,
        email: dummyFormLP.localiza.success.email,
    }),
    yduqs: () => ({
        ...successDefaultTemplate(),
        path: dummyPath.lp.yduqs,
        email: dummyFormLP.yduqs.success.email,
    }),
    empresas: () => ({
        ...successDefaultTemplate(),
        path: dummyPath.lp.empresas,
        email: dummyFormLP.empresas.success.email,
        companyName: dummyForm.company.name,
        requestUrl: dummyUrl.stepOne    // Overwriting the default requestUrl
    }),
    novosClientes: () => ({
        ...successDefaultTemplate(),
        path: dummyPath.lp.novosClientes,
        email: dummyFormLP.novosClientes.success.email,
        requestUrl: dummyUrl.stepOne    // Overwriting the default requestUrl
    })
};

export const failureDataHelper = {
    martins: () => ({
        ...failureDefaultTemplate(),
        path: dummyPath.lp.martins,
        email: dummyFormLP.martins.failure.email,
        registration: dummyForm.user.registration
    }),
    tribanco: () => ({
        ...failureDefaultTemplate(),
        path: dummyPath.lp.tribanco,
        email: dummyFormLP.tribanco.failure.email,
    }),
    tim: () => ({
        ...failureDefaultTemplate(),
        path: dummyPath.lp.tim,
        email: dummyFormLP.tim.failure.email,
    }),
    allya: () => ({
        ...failureDefaultTemplate(),
        path: dummyPath.lp.allya,
        email: dummyFormLP.allya.failure.email,
    }),
    localiza: () => ({
        ...failureDefaultTemplate(),
        path: dummyPath.lp.localiza,
        email: dummyFormLP.localiza.failure.email,
    }),
    yduqs: () => ({
        ...failureDefaultTemplate(),
        path: dummyPath.lp.yduqs,
        email: dummyFormLP.yduqs.failure.email,
    }),
    empresas: () => ({
        ...failureDefaultTemplate(),
        path: dummyPath.lp.empresas,
        email: dummyFormLP.empresas.failure.email,
        companyName: dummyForm.company.name,
        requestUrl: dummyUrl.stepOne    // Overwriting the default requestUrl
    }),
    novosClientes: () => ({
        ...failureDefaultTemplate(),
        path: dummyPath.lp.novosClientes,
        email: dummyFormLP.novosClientes.failure.email,
        requestUrl: dummyUrl.stepOne    // Overwriting the default requestUrl
    })
};


export const createTestData = (scenario, partner) => {
    if (scenario === "success") return successDataHelper[partner]()
    if (scenario === "failure") return failureDataHelper[partner]()
}