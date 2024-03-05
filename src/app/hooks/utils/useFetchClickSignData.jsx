import { requestSuccessful } from '@/app/service/utils/Validations';
import axios from 'axios';
import { useStoreClickSign, useStoreUser } from '../useStore';

const useFetchClickSignData = () => {

    const store = useStoreUser()
    const storeClicksign = useStoreClickSign()

    const fetchData = async () => {
        const uuid = store.uuid;

        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consumer/${uuid}`);
            if (requestSuccessful(response.status)) {
                storeClicksign.updateClickSign(response?.data?.instalacao?.clicksign_reg);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return fetchData;
};

export default useFetchClickSignData;
