import axios from "axios";
import { updateSharedAccess } from "../profile-service/ProfileService";
import { requestSuccessful } from "../utils/Validations";

export const syncDistributorData = async (uuid, data, store, setErrorMessage, setNotifications, setIsLoading) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/distribuidora-login/${uuid}`, data);
        console.log("@@@@@ response ===>>>>", response)
        if (requestSuccessful(response?.status)) {
            await updateSharedAccess(response, store)

        } else {
            console.error("Failed to sync user access");
        }
    } catch (error) {
        console.error("Error syncing user access:", error);
    } finally {
        setIsLoading(false);
    }
}