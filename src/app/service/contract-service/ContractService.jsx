import { getInstallationByUUID } from "../installation-service/InstallationService";
import { requestSuccessful } from "../utils/Validations";

export const getClicksignKey = async (uuid) => {
    const response = await getInstallationByUUID(uuid)
    if (requestSuccessful(response?.status)) {
        const clicksignKey = response.data.instalacao.document_key
        return clicksignKey
    }

}