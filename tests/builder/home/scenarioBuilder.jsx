import { destinationPattern, dummyForm, dummyPath, dummyUrl } from "../../helpers/dummyDataHelper";

export const createHomeTestData = (scenario) => {

    if (scenario === "success") {
        return {
            path: dummyPath.home,
            name: dummyForm.user.name,
            email: dummyForm.user.email,
            phone: dummyForm.user.phone,
            cep: dummyForm.cep.success.beloHorizonte,
            requestUrl: dummyUrl.stepOne,
            destinationPattern: destinationPattern.signup,
        };
    } else if (scenario === "fail-region") {
        return {
            path: dummyPath.home,
            name: dummyForm.user.name,
            email: dummyForm.user.email,
            phone: dummyForm.user.phone,
            cep: dummyForm.cep.fail.saoPauloCapital,
            requestUrl: dummyUrl.stepOne,
            destinationPattern: destinationPattern.outOfRange,
        };
    }
}

export const createMainFormTestData = (scenario) => {
    if (scenario === "success") {
        return {
            path: dummyPath.home,
            name: dummyForm.user.name,
            email: dummyForm.user.dynamicEmail.success,
            phone: dummyForm.user.phone,
            cep: dummyForm.cep.success.beloHorizonte,
            requestUrl: dummyUrl.stepOne,
            destinationPattern: destinationPattern.signup,
        };
    } else if (scenario === "fail-region") {
        return {
            path: dummyPath.home,
            name: dummyForm.user.name,
            email: dummyForm.user.dynamicEmail.failure,
            phone: dummyForm.user.phone,
            cep: dummyForm.cep.fail.saoPauloCapital,
            requestUrl: dummyUrl.stepOne,
            destinationPattern: destinationPattern.outOfRange,
        };
    }
}