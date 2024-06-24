import { destinationPattern, dummyForm, dummyPath, dummyUrl } from "../../helpers/dummyDataHelper";

export const createLoginTestData = (scenario) => {
    if (scenario === "success") {
        return {
            path: dummyPath.login,
            email: dummyForm.login.email,
            password: dummyForm.login.password,
            requestUrl: dummyUrl.login,
            destinationPattern: destinationPattern.dashboard,
        };
    }
}