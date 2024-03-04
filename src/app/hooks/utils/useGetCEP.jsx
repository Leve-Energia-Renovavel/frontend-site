// useGetCEP.js

import { useStoreAddress } from "@/app/hooks/useStore";
import axios from 'axios';
import { requestSuccessful } from "../../service/utils/Validations";

const useGetCEP = () => {
    const storeAddress = useStoreAddress();

    const fetchData = async (cep) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SIGNUP_BASE_URL}/sign-up/consulta-cep`, {
                params: { cep: cep }
            });

            if (requestSuccessful(response?.status)) {
                const address = response?.data;
                storeAddress.updateAddress({
                    street: address?.logradouro,
                    neighborhood: address?.bairro,
                    city: address?.cidade,
                    state: address?.uf,
                    cep: address?.cep,
                });
            }
        } catch (error) {
            console.error('Error fetching CEP data:', error);
        }
    };

    return fetchData;
};

export default useGetCEP;
