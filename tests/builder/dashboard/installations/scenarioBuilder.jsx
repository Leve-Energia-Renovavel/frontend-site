import { destinationPattern, dummyForm, dummyPath, dummyUrl } from "../../../helpers/dummyDataHelper";

export const addNewInstallationTestData = (scenario) => {
    if (scenario === "success") {
        return {
            path: dummyPath.login,
            email: dummyForm.login.email,
            password: dummyForm.login.password,
            requestUrl: dummyUrl.login,
            destinationPattern: destinationPattern.dashboard,
            cep: dummyForm.cep.success.beloHorizonte,
            cost: dummyForm.user.cost,
        };
    } else if (scenario === "fail-region") {
        return {
        };
    }
}