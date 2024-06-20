import { destinationPattern, dummyForm, dummyPath, dummyUrl } from "../../helpers/dummyDataHelper";

export const createSignupTestData = (scenario) => {
    if (scenario === "success") {
        return {
            path: dummyPath.signup,
            rg: dummyForm.user.rg,
            cpf: dummyForm.user.cpf,
            birthDate: dummyForm.user.birthDate,
            number: dummyForm.address.number,
            complement: dummyForm.address.complement,
            installationNumber: dummyForm.address.installationNumber,
            requestUrl: dummyUrl.storeClient,
            destinationPattern: destinationPattern.contractSignature,
        };
    }
}