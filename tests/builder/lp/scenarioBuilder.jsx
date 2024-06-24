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
};

export const createTestData = (scenario, partner) => {
    if (scenario === "success") return successDataHelper[partner]()
}